import { createWorker } from "tesseract.js";
import { Image } from "image-js";

const converter = async (img: string) => {
  const rawImage = await Image.load(img);
  const processedImage = rawImage
  .grey()
  .mask({
    algorithm: 'threshold',
    threshold: 0.6,
  })
  .invert();


  const dataImage = processedImage.toDataURL();
  const worker = await createWorker("eng");
  const ret = await worker.recognize(dataImage);
  const data = ret.data.text;
  await worker.terminate();
  return data;
};

export default converter;
