import React, { useState , useEffect} from 'react';
import ImageRecognition from '../imageRecognition';
import {InferenceSession , TensorFactory ,Tensor} from 'onnxruntime-web';

let reader = new FileReader()
let fileImg = new Image();
const IMGSIZE = 224

function imageDataToTensor(data:Uint8ClampedArray,dims:number[]){
  const [redArray, greenArray, blueArray] = new Array(new Array<number>(), new Array<number>(), new Array<number>());

  for (let i = 0; i < data.length; i += 4) {
    redArray.push((data[i]/255        -0.485)/0.229);
    greenArray.push((data[i + 1]/255  -0.456)/0.224);
    blueArray.push((data[i + 2]/255   -0.406)/0.225);

  }
  const transposedData = redArray.concat(greenArray).concat(blueArray);
  const float32Data = new Float32Array(dims[0] * dims[1] * dims[2]);
  let i, l = transposedData.length;
  for (i = 0; i < l; i++) {
    float32Data[i] = transposedData[i];
  }
  const inputTensor = new Tensor("float32", float32Data, dims);
  const x = inputTensor.reshape([1,3,224,224])
  return x;
}

async function identifyImg(imgData:ImageData){
  const session = await InferenceSession.create('/sqNext.onnx');
  const imageDataTensor = imageDataToTensor(imgData.data,[3,224,224])
  const feeds = { input: imageDataTensor };
  const result = await session.run(feeds)
  console.log(result.output.data)
}

const DragAndDropUploader: React.FC = () => {

  useEffect(()=>{
    const imgCanvas:CanvasRenderingContext2D|null = document.querySelector('canvas')!.getContext('2d')
    
    reader.onload = function(event) {
      fileImg.src = event.target!.result as string
    }
    
    fileImg.onload = function(){  
      imgCanvas!.clearRect(0, 0, IMGSIZE, IMGSIZE);
      imgCanvas!.drawImage(fileImg, 0, 0,IMGSIZE,IMGSIZE);
      let imgData:ImageData|undefined = imgCanvas?.getImageData(0, 0, IMGSIZE, IMGSIZE);
      identifyImg(imgData!)
    }
  },[])

  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const files = event.dataTransfer.files;
    // 处理上传的文件
    reader.readAsDataURL(files[0]);
  };

  return (
    <div
      className={`dropzone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <canvas height={IMGSIZE} width={IMGSIZE}></canvas>
      <ImageRecognition />
    </div>
  );
};

export default DragAndDropUploader;