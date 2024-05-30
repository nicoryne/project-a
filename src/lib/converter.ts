import { createWorker } from 'tesseract.js';
import cv from '@techstark/opencv-js';

const converter = async (img: string) => {
  const worker = await createWorker("eng");
  const ret = await worker.recognize(img);  
  const data = ret.data.text;
  await worker.terminate();
  return data;
}

export default converter;