import { createWorker } from "tesseract.js";
import { Image } from "image-js";

const converter = async (img: string) => {
  const rawImage = await Image.load(img);

  const cropWidth = 1260;
  const cropHeight = 540;
  const startX = 330;
  const startY = 330;


  const processedImage = rawImage
  .grey()
  .mask({
    algorithm: 'threshold',
    threshold: 0.51,
  })
  .invert()
  .crop({
    x: startX,
    y: startY,
    width: cropWidth,
    height: cropHeight
  });


  const dataImage = processedImage.toDataURL();
  const worker = await createWorker("eng");
  const ret = await worker.recognize(dataImage);
  const data = ret.data.text;
  await worker.terminate();
  return data;
};

export default converter;
