// import React, { useState } from 'react'

// import '../css/Profile.css'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Scrollbars from 'react-custom-scrollbars-2';
// import { Avatar, Button, backdropClasses } from '@mui/material';
// // import { AddCircle, Edit, EditAttributesOutlined, EditAttributesRounded, EditAttributesSharp, EditCalendar, EditNote, EditRoad } from '@mui/icons-material';
// // import { getCurrentUserDetail } from '../appwrite';
// import { Link } from 'react-router-dom';

// export default function Profile() {

//   const userData = JSON.parse(sessionStorage.getItem('loginUser'));

//   const [user, setUser] = useState(userData);
//   const [loading, setLoading] = useState(false);

//   const updateUser = async (event) => {
//     event.preventDefault();

//     try {
//       setLoading(true)
//       const formData = new FormData();
//       // formData.append('images', images);
//       // formData.append('products', JSON.stringify(user));


//       const response = await axios.put(`${baseUrl}/user/`, formData);
//       // const response = await axios.post(`http://localhost:5005/product/`,formData);

//       console.log(response.data);
//       if (response.status == 200) {
//         setLoading(false);
//         toast.success('Your Profile has been Updated')

//       }
//       else if (response.status == 503) {
//         setLoading(false);
//         toast.error('Server is down !')
//       } else {
//         setLoading(false);
//         toast.error('Some thing went wrong !')
//       }

//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//       toast.error('Server is down !')
//     }
//   };

//   const handleProductsChange = (event) => {
//     const { name, value } = event.target;
//     setUser(prevFormData => ({
//       ...prevFormData,
//       [name]: value
//     }));

//   }


//   return (
//     <>
//       <div className='row mt-3'>


//         <p className='col'>
//           <header className="cssui-usercard__header">


//             {(userData.imagePath != null || userData.imagePath != undefined) ? (
//               <div>
//                 <img className='sidebarImg' src={userData.imagePath} alt='' />

//               </div>
//             ) : (<>
//               <div >
               

//               </div>
//             </>)}
//             <div className="ml-4">
//               <h5 className="">{userData.firstName} {userData.lastName}</h5>
//               <h5 className="">{userData.profile}</h5>
             
//             </div>

//           </header>
//         </p>
       
//       </div>
//       <Scrollbars style={{ height: 435 }}>
//         <form className='container' encType="multipart/form-data" action="" onSubmit={updateUser}>

//           <Box
//             component="form"
//             sx={{
//               '& .MuiTextField-root': { mt: 1, width: '55ch' },
//             }}

//           >
//             <div className='row'>
//               <div className='col'>

//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="firstName" label='First Name' onChange={handleProductsChange} name='firstName' value={user.firstName} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="lastName" label='Last Name' onChange={handleProductsChange} name='lastName' value={user.lastName} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="phone" label='Phone No.' onChange={handleProductsChange} name='phone' value={user.phone} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="lastName" label='Designation' onChange={handleProductsChange} name='profile' value={user.profile} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="role" label='Role Name' onChange={handleProductsChange} name='role' value={user.authorities[0].authority} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="institutionName" label='Institution Name' onChange={handleProductsChange} name='institutionName' value={user.institutionName} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="documentNumber" label='Document Number' onChange={handleProductsChange} name='documentNumber' value={user.documentNumber} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="shortDescription" label='Short Description' onChange={handleProductsChange} name='shortDescription' value={user.shortDescription} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="fasebook" label='Facebook' onChange={handleProductsChange} name='fasebook' value={user.fasebook} disabled />

//               </div>
//               <div className='col'>

//                 <TextField color="success" size='small' variant="filled" type="email" className="form-control profileText" id="email" value={user.email} name='email' label='Variation Name' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="pincode" value={user.pincode} name='pincode' label='Pincode' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="city" value={user.city} name='city' label='City' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="state" value={user.state} name='state' label='State' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="country" value={user.country} name='country' label='Country' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="address" value={user.address} name='address' label='Full Address' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="insta" value={user.insta} name='insta' label='Insta' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="linkdin" value={user.linkdin} name='linkdin' label='Linkdin' onChange={handleProductsChange} disabled />
//                 <TextField color="success" size='small' variant="filled" type="text" className="form-control profileText" id="Twitter" value={user.twitter} name='twitter' label='Twitter' onChange={handleProductsChange} disabled />


//                 <button className='button mt-3 form-control' onClick={updateUser}>Update Your Data</button>

//               </div>

//             </div>


//           </Box>
//         </form>
//       </Scrollbars>

//     </>
//   )
// }
