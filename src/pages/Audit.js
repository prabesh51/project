/* Ashim Adhakari = 104104333 */


import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './Audit.css';

const Audit = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State to track the selected file
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message

  useEffect(() => {
    const fileUpload = document.getElementById("file-upload");
    const fileNameDisplay = document.getElementById("file-name");

    fileUpload.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const fileName = file.name;
        if (fileName.endsWith('.sol')) {
          setSelectedFile(file);
          setErrorMessage(''); // Clear any previous error message
          fileNameDisplay.textContent = `Selected file: ${fileName}`; // Display the file name
        } else {
          setErrorMessage('Invalid file format. Please select a .sol file.');
          setSelectedFile(null);
          fileNameDisplay.textContent = ''; // Clear the file name display
        }
      } else {
        setSelectedFile(null);
        setErrorMessage('Please select a file.');
        fileNameDisplay.textContent = ''; // Clear the file name display
      }
    });
  }, []);  

  const handleFormSubmit = () => {
    if (selectedFile) {
      // Handle the form submission here, e.g., send the file to the server for auditing

      // Redirect to the report page or perform any other action
      window.location.href = '/Report';
    } else {
      // Show an error message if no file is selected or the format is invalid
      alert(errorMessage);
    }
  };

  return (

    
    <Layout>
      <div class="hero"> 
  <div class="hero__title">Check your solidity code down below</div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
      <div class = "background-audit">
      <div className="container-audit">
        <h1>Upload a Solidity File</h1>
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose File
        </label> 
        <input type="file" id="file-upload" name="solidityFile" accept=".sol" />
        <div id="file-name"></div>
        <button class = "submit" onClick={handleFormSubmit}>Submit</button>
        <div class = "check-history" >
          <h2>Check Previous History</h2>
        <button class = "history" onClick={handleFormSubmit}>History</button>
        </div>
      </div>
      </div>


      
    </Layout>


    
  );
};

export default Audit;
