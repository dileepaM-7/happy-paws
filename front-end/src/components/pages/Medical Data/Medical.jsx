import React, { useState, useEffect } from 'react';
import './Medical.css';
import { Navbar } from '../../NavigationBar/Navbar';
import Footer from "../../Footer/Footer";
import { auth } from '../../../firebase-config';
import { getStorage, ref, listAll, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import medicalDetailsHeader from '../../../assets/medicalDetailsHeader.png'

function FirebaseImageUpload() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [emailLogged, setEmailLogged] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    setEmailLogged(auth.currentUser?.email || ''); // Set initial value to empty string
    // Load uploaded files when component mounts
    loadUploadedFiles();
  }, [auth.currentUser?.email]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleClick = async () => {
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${emailLogged}/${fileName || v4()}`);
      
      try {
        await uploadBytes(storageRef, file);
        setUploadStatus(`File "${fileName || file.name}" uploaded successfully for user: ${emailLogged}`);
        console.log('File uploaded successfully');
        setFileName(''); // Reset file name after successful upload
        // Reload uploaded files after successful upload
        loadUploadedFiles();
      } catch (error) {
        setUploadStatus(`Error uploading file: ${error.message}`);
        console.error('Error uploading file:', error);
      }
    } else {
      setUploadStatus('No file selected');
      console.error('No file selected');
    }
  };

  const loadUploadedFiles = async () => {
    const storage = getStorage();
    const userStorageRef = ref(storage, `images/${emailLogged}`);
    try {
      const result = await listAll(userStorageRef);
      const files = await Promise.all(result.items.map(async (item) => {
        const downloadURL = await getDownloadURL(item);
        return { name: item.name.split('/').pop(), url: downloadURL };
      }));
      setUploadedFiles(files);
    } catch (error) {
      console.error('Error loading uploaded files:', error);
    }
  };

  const handleFilePreview = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="App-medical">
      <Navbar />

      {/* Add a header section with a dog image */}
      <header className="medical-header">
        <img src={medicalDetailsHeader} alt="Dog Header" />
        <h2 className="mediHeadName">Medical Records</h2>
      </header>
      
      <main className="medical-content">
        <div className="file-upload">
          <input
            type="text"
            placeholder="Enter file name"
            value={fileName}
            onChange={handleFileNameChange}
          />
          <input 
            type="file" 
            onChange={handleFileChange} />
          <button onClick={handleClick}>Upload</button>
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
          <button onClick={loadUploadedFiles}>Show Uploaded</button>
        </div>

        <div className="uploaded-files">
          <h3 className='mediUploaded'>Uploaded Files:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a href="#" onClick={() => handleFilePreview(file.url)}>{file.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Add a dog GIF or image in the main content area */}
        <div className="dog-image">
          <img src="path/to/dog-image.gif" alt="Dog GIF" />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FirebaseImageUpload;
