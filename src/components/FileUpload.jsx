import { useEffect, useState } from "react";
import ResponseDisplay from "./ResponseDisplay";
import axios from "axios";


function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [uploadStartTime, setUploadStartTime] = useState(null);
    const [timer, setTimer] = useState(null);
    const [uploadTime, setUploadTime] = useState(null);

    useEffect(() => {
      if (responseData) {
        const endTime = Date.now();
        const timeDiff = endTime - uploadStartTime;
        setUploadTime(timeDiff);
        clearInterval(timer);
      }
    }, [responseData, uploadStartTime, timer]);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const startTime = Date.now();
        setUploadStartTime(startTime);
        const newTimer = setInterval(() => {
          const currentTime = Date.now();
          setUploadTime(currentTime - startTime);
        }, 100);
        setTimer(newTimer);
  
        const response = await axios.post(import.meta.env.VITE_GET_RESULT, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setResponseData(response.data);
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    };
  
    return (
      <div>
        <h1>File Upload In bz2 format</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={handleFileChange}
            />
            <button type="submit">Upload</button>
        </form>
        {uploadTime !== null && <div>Upload Time: {uploadTime / 1000} seconds</div>}
        <ResponseDisplay responseData={responseData} />
      </div>
    );
  }

export default FileUpload