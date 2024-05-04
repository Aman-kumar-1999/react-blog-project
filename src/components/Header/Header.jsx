import React, { useEffect, useState } from 'react'
import Logo from '../../template/Logo'
import Search from '../../template/Search'
import RightHeader from '../../template/RightHeader'
import HeaderSpace from '../../template/HeaderSpace'
import '../../css/Header.css'
import MobileHeader from './MobileHeader'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from '@mui/material'

export default function Header() {

  const authStatus = useSelector(state => state.auth.status)
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //     const handleResize = () => {
  //         const isMobileDevice = window.innerWidth <= 600; // Change 600 to your desired breakpoint
  //         console.log('is mobile ',isMobileDevice)
  //         setIsMobile(isMobileDevice);
  //     };
  //     window.addEventListener('resize', handleResize);
  //     handleResize(); // Check initial screen size
  //     return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (

    <div className="header container-fluid sticky-top">

      <Link to={'/'}>

        <Logo className='logo' />
      </Link>
      {
        authStatus ? (<>


          <Search />
        </>) : (<>

        </>)
      }
      <HeaderSpace />
      {
        authStatus ? (<>


          <RightHeader />

        </>) : (<>
          <Link to={'/login'}>
            <IconButton>
              <Avatar style={{ width: '30px', height: '30px' }} src='login.png' />
            </IconButton>

          </Link>
        </>)
      }

    </div>

  )
}
