import React, { useState } from 'react'
import '../css/CBEXII.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { TextField } from '@mui/material';
import { BASE_URL } from '../helper/helper';
import { getToken } from '../../src/auth';

export default function CBEXII() {

  const userData = JSON.parse(sessionStorage.getItem('loginUser'))
  const [loading, setLoading] = useState(false);

  // const [products, setProducts] = useState({
  //     "vendorId": userData.id,
  //     "vendorName": userData.firstName + ' ' + userData.lastName,
  //     "vendorEmail": userData.email,
  // });



  const [data, setData] = useState([]);

  // const handleDownload = async () => {
  //     const { data: excelData } = await axios.get("Product sep.xlsx");
  //     const blob = new Blob([excelData], { type: "application/vnd.ms-excel" });
  //     FileSaver.saveAs(blob, "Product sep.xlsx");
  // };

  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    setFile(event.target.files[0]);
    console.log('file name' + event.target.file)
  };
  // const handleProductsChange = (event) => {

  //     setProducts();

  // }
  // useEffect(() => {
  //     handleProductsChange;
  //   }, []);



  const createProductsInBulk = async (event) => {
    event.preventDefault();


    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(`${BASE_URL}/excel/cbexii`, formData, {
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
        link.download = 'CBE-XII-Generated.xml';

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);

        setLoading(false)
        toast.success('Xml Data has been download')
        // } else {
        //     setLoading(false)
        //     toast.error('Unable to Create All Product')
        // }


      }

    } catch (error) {
      console.error(error);
      setLoading(false)
      toast.error("Xml Data can't be download");

    }
  };

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <h2>Create Product</h2> */}
      {/* <img src=''/> */}
      {/* <div className="name">Select Your Excel</div> */}
      <label className="label" aria-hidden="true">Select Your CBE-XII Excel </label>

      <div style={{ float: 'right' }} className=''>
        <a href='Sample-CBE-XII.xlsx' >
          <button className='btn buttonAddbulk'>
            <span className="material-symbols-outlined">
              download
            </span>
          </button>
          <p>Download sample Demo Excel file</p>
        </a>
        {/* <Link
          to={"D:/Converter Project/Xml_Converter_Front_End/public/DHL_XML_Data.xlsx"}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <button className='btn buttonAddbulk'>Download Samle Excel file<Download /></button>
        </Link> */}

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
          {/* <Button>Create Product in Bulk</Button> */}

          {/* <div className="mb-3">
                      <input type="file" className="form-control btn btn-danger" placeholder='file' name='file' onChange={handleInputChange} required />
                  </div> */}
          <div>
            <button type="submit" className="buttonAddbulk mt-5 form-control" >Convert to Xml</button>
          </div>
        </form>
      </div>
    </>
  )
}

