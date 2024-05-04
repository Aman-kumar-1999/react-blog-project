import React, { useState } from 'react'
import '../css/CBEXII.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { Download } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { BASE_URL } from '../../src/helper/helper';
import { getToken } from '../../src/auth';

export default function DemoXsd() {

  const [loading, setLoading] = useState(false);



  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setFile(event.target.files[0]);
    console.log('file name' + event.target.file)
  };



  const createProductsInBulk = async (event) => {
    event.preventDefault();


    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`${BASE_URL}/excel/demo`, formData, {
        headers: {
          'Authorization': `Bearer ${getToken()}`,
        }
      });

      if (response.status == 200) {

        const xmlString = `
                  ${response.data}
                `;

        // Create a Blob from the XML string
        const blob = new Blob([xmlString], { type: 'application/xml' });

        // Create a download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);

        // Set the filename for the download
        link.download = 'example.xml';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);

        setLoading(false)
        toast.success('Xml Data has been download')


      }

    } catch (error) {
      console.error(error);
      setLoading(false)
      toast.error("Xml Data can't be download");

    }
  };

  return (
    <>
      <label className="label" aria-hidden="true">Select Your Excel</label>

      <div style={{ float: 'right' }} className=''>
        <a href='Demo.xlsx' >
          <button className='btn buttonAddbulk'>
            <span className="material-symbols-outlined">
              download
            </span>
          </button>
          <p>Download sample Demo Excel file</p>
        </a>

      </div>

      {
        loading ?
          (
            <>
              <h5 className='pt-4'>

                <img style={{ width: 40, height: 40 }} src='spinner.gif' />

              </h5>
            </>
          ) :
          (
            <>

            </>
          )
      }
      <div className='add'>

        <form className='container' encType="multipart/form-data" action="" onSubmit={createProductsInBulk}>


          <TextField helperText="Please select your excel file" type='file' className="" placeholder='file' name='file' onChange={handleInputChange} required />

          <br />
          <div>
            <button type="submit" className="buttonAddbulk mt-5 form-control" >Convert to Xml</button>
          </div>
        </form>
      </div>
    </>
  )
}
