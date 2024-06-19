/*import React, { useState } from 'react';
import { storage } from '../firebase';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress function (optional)
        },
        (error) => {
          console.error('Error uploading file:', error);
        },
        () => {
          // Completion function
          storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then((downloadUrl) => {
              setUrl(downloadUrl);
            })
            .catch((error) => {
              console.error('Error getting download URL:', error);
            });
        }
      );
    } else {
      console.error('Nenhum arquivo selecionado para upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {url && <img src={url} alt="Uploaded File" style={{ maxWidth: '100%', marginTop: '20px' }} />}
    </div>
  );
};

export default Upload;*/
