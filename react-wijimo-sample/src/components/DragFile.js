import React from 'react';
import './App.css';
import Dropzone from 'react-dropzone';

function DragFile () {
​
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
​
  const files = acceptedFiles.map(file => (
    <li>{file.path}</li>
  ));
​
  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ul>
        {files}
      </ul>
    </div>
  );
}
​
export default DragFile;
