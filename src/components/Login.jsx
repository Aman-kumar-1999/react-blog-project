import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch, useSelector } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import '../css/Login.css'
import { FormHelperText, Input, InputAdornment } from '@mui/material'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    

    const login = async (data) => {
        setLoading(true)
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                console.log('User Data : ',userData)
                if (userData) dispatch(authLogin(userData));
                setLoading(false);
                navigate("/")

            }
        } catch (error) {
            setLoading(false);
            setError(error.message)
        }
    }

    return (
        <>
            <div className='container mt-5 mb-5'>
                <div className='login'>
                    <div className="card login-card mb-5" style={{  background: "rgba(0, 0, 0, 0.05)" }}>
                        <div className="card-body mb-5">
                            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                            <form className='mb-4' onSubmit={handleSubmit(login)}>
                                <label className="label" aria-hidden="true">Login Page</label>
                                <div className='text-center'>
                                    <span className="material-symbols-outlined" style={{ fontSize: "100px" }}>
                                        passkey
                                    </span>
                                </div>
                                <Input name="username" type="text" id="username"
                                    {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                        }
                                    })}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <span className="material-symbols-outlined">
                                                email
                                            </span>
                                        </InputAdornment>
                                    }
                                    placeholder='Email Id' className='mb-4'
                                    

                                />
                                <br/>
                                
                                <Input name="password" type="password" id="password"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <span className="material-symbols-outlined">
                                                password
                                            </span>
                                        </InputAdornment>
                                    }
                                    {...register("password", {
                                        required: true,
                                    })}
                                    placeholder='Password' />
                                    <br/>
                                <h6 className='forgot-password mb-3 mt-3'>
                                    <NavLink
                                        style={{ color: 'rgb(199, 98, 98)' }} 
                                        className={({ isActive }) =>
                                            `${isActive ? "link-color" : "nav-link"}`
                                        } to={'/forgotPassword'}>Forgot Password</NavLink>
                                </h6>
                                {
                                    loading ?
                                        (
                                            <>
                                                <h5 className='pt-5 mt-5'>

                                                    <img style={{ width: 40, height: 40 }} src='spinner.gif' />

                                                </h5>
                                            </>
                                        ) :
                                        (
                                            <>

                                                <button className='button mt-5 form-control'>Login</button>
                                            </>
                                        )
                                }

                                {/* <NavLink to={'/signup'} className='button mt-3 form-control'  >Sign Up</NavLink> */}
                                {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div
        // className='flex items-center justify-center w-full'

        // >
        //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        //     <div className="mb-2 flex justify-center">
        //                 <span className="inline-block w-full max-w-[100px]">
        //                     <Avatar width="100%" />
        //                 </span>
        //     </div>
        //     <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        //     <p className="mt-2 text-center text-base text-black/60">
        //                 Don&apos;t have any account?&nbsp;
        //                 <Link
        //                     to="/signup"
        //                     className="font-medium text-primary transition-all duration-200 hover:underline"
        //                 >
        //                     Sign Up
        //                 </Link>
        //     </p>
        //     {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        //     <form onSubmit={handleSubmit(login)} className='mt-8'>
        //         <div className='space-y-5'>
        //             <Input
        //             label="Email: "
        //             placeholder="Enter your email"
        //             type="email"
        //             {...register("email", {
        //                 required: true,
        //                 validate: {
        //                     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        //                     "Email address must be a valid address",
        //                 }
        //             })}
        //             />
        //             <Input
        //             label="Password: "
        //             type="password"
        //             placeholder="Enter your password"
        //             {...register("password", {
        //                 required: true,
        //             })}
        //             />
        //             <Button
        //             type="submit"
        //             className="w-full"
        //             >Sign in</Button>
        //         </div>
        //     </form>
        //     </div>
        // </div>
    )
}

export default Login;