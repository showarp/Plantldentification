import React, { useState } from 'react';
import ImageRecognition from '../imageRecognition';
import * as ort from 'onnxruntime-web';

async function identifyImg(){
  const session = await ort.InferenceSession.create('sqNext.onnx')
}

const DragAndDropUploader: React.FC = () => {
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
    console.log(files);
  };
  identifyImg();
  return (
    <div
      className={`dropzone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <ImageRecognition />
    </div>
  );
};

export default DragAndDropUploader;