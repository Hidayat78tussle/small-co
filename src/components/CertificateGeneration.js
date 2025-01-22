import React, { useState } from 'react';
import Papa from 'papaparse';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';

const CertificateGeneration = () => {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCsvUpload = (e) => {
    const csvFile = e.target.files[0];
    Papa.parse(csvFile, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  const generateCertificates = async () => {
    if (!file || csvData.length === 0) {
      alert('Please upload both the Word file and CSV file!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const zip = new PizZip(arrayBuffer);
      const doc = new Docxtemplater(zip);

      csvData.forEach((user) => {
        // Set data to replace in the Word template (adjust keys as per your template)
        doc.setData({
          name: user.name,
          email: user.email,
        });

        try {
          // Render the document with the user data
          doc.render();

          // Generate and save the certificate as a file
          const generatedDoc = doc.getZip().generate({ type: 'blob' });
          saveAs(generatedDoc, `${user.name}_certificate.docx`);
        } catch (error) {
          console.error(error);
          alert('Error generating certificate for ' + user.name);
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>Certificate Generation System</h1>
      <div>
        <input type="file" accept=".docx" onChange={handleFileChange} />
        <input type="file" accept=".csv" onChange={handleCsvUpload} />
      </div>
      <button onClick={generateCertificates}>Generate Certificates</button>
    </div>
  );
};

export default CertificateGeneration;
