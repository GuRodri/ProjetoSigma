// src/components/Upload.js
import React, { useState } from 'react';
import { storage } from '../firebase';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={url} alt="" />
    </div>
  );
};

export default Upload;
