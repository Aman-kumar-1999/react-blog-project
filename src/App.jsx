
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSlice, { login, logout } from './store/authSlice';
import authService from './appwrite/auth';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Backdrop, CircularProgress } from '@mui/material';
import MobileHeader from './components/Header/MobileHeader';
import MobileSide from './components/SideBar/MobileSide';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [loding, setLoding] = useState(true);

  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 1024; // Change 600 to your desired breakpoint
      console.log('is mobile ', isMobileDevice)
      setIsMobile(isMobileDevice);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
          toast.success('Login Success');
        } else {
          dispatch(logout())
          toast.error('Login error');
        }
      })
      .finally(() => setLoding(false))

  }, [])

  return loding
    ?
    (<>
      {
        /* <h5 className='pt-5 mt-5'>
  
            <img style={{ width: 80, height: 80 }} src='spinner.gif' />
  
          </h5> */
      }
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loding}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>)
    : (<>
      {isMobile ?
        (<MobileHeader />)

        : (



          <Header />
        )}

      {isMobile ? (<>
        {
          authStatus ? (<>
            <MobileSide />

          </>) : (<>

          </>)
        }
        <div className="card">

          <Outlet />
        </div>
      </>

      ) : (

        <div className="container-fluid">
          {
            authStatus ? (<>
              <div className="row">
                <div className="col-2">

                  <SideBar />


                </div>
                <div className="col-10">
                  <div className="card">

                    <Outlet />
                  </div>
                </div>
              </div>

            </>) : (<>
              <div className="card">

                <Outlet />
              </div>
            </>)
          }

        </div>

      )}
      <Footer />

    </>)
}

export default App
