import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import SignUp from './components/SignUp.jsx'
import { ToastContainer } from 'react-toastify'
import ForgotPassword from './components/ForgotPassword.jsx'
// import Profile from './components/Profile.jsx'
// import Dashboard from './components/Dashboard.jsx'
import CBEXII from './components/CBEXII.jsx'
import CBEXIII from './components/CBEXIII.jsx'
import CBEXIV from './components/CBEXIV.jsx'
import DemoXsd from './components/DemoXsd.jsx'
import B404 from './components/B404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "*",
            element: <B404 />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={true}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/forgotPassword",
            element: (
                <AuthLayout authentication={false}>
                    <ForgotPassword />
                </AuthLayout>
            ),
        },
        // {
        //     path: "/profile",
        //     element: (
        //         <AuthLayout authentication>
        //            <Profile/>
        //         </AuthLayout>
        //     ),
        // },
        // {
        //     path: "/dashboard",
        //     element: (
        //         <AuthLayout authentication>
        //            <Dashboard/>
        //         </AuthLayout>
        //     ),
        // },
        {
            path: "/CBE-XII",
            element: (
                <AuthLayout authentication>
                   <CBEXII/>
                </AuthLayout>
            ),
        },
        {
            path: "/CBE-XIII",
            element: (
                <AuthLayout authentication>
                   <CBEXIII/>
                </AuthLayout>
            ),
        },
        {
            path: "/CBE-XIV",
            element: (
                <AuthLayout authentication>
                   <CBEXIV/>
                </AuthLayout>
            ),
        },
        {
            path: "/demo",
            element: (
                <AuthLayout authentication>
                   <DemoXsd/>
                </AuthLayout>
            ),
        },

       
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
