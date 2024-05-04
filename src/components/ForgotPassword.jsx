import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import '../css/Login.css'
import { FormHelperText, Input, InputAdornment } from '@mui/material'

export default function ForgotPassword() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
  return (
    <>
        <div className='container mt-5 mb-5'>
                <div className='login'>
                    <div className="card login-card mb-5" style={{ width: "20rem", background: "rgba(0, 0, 0, 0.05)" }}>
                        <div className="card-body mb-5">
                            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                            <form className='mb-4' onSubmit={handleSubmit()}>
                                <label className="label" aria-hidden="true">Forgot Password</label>
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
                                
                                {/* <Input name="password" type="password" id="password"
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
                                    placeholder='Password' /> */}
                                {/* <h6 className='forgot-password mb-3 mt-3'>
                                    <NavLink
                                        style={{ color: 'rgb(199, 98, 98)' }} 
                                        className={({ isActive }) =>
                                            `${isActive ? "link-color" : "nav-link"}`
                                        } to={'/forgotPassword'}>Forgot Password</NavLink>
                                </h6> */}
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

                                                <button className='button mt-5 form-control'>Forgot Password</button>
                                            </>
                                        )
                                }

                                <NavLink to={'/login'} className='button mt-3 form-control'  >Sign Up</NavLink>
                                {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
