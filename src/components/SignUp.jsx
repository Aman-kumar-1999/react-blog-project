import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {login} from '../store/authSlice'
// import {Button, Input, Logo} from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Input, InputAdornment } from '@mui/material'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false);

    const create = async (data) => {
        setError("")
        setLoading(true)
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const session = await authService.getCurrentUser()
                if (userData) {
                    console.log('User Data : ',userData)
                    dispatch(login(userData));
                    setLoading(false)
                    navigate("/")
                }
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='login'>
                <div className="card login-card mb-5" style={{ 
                    // width: "18rem",
                    background: "rgba(0, 0, 0, 0.05)" }}>
                    <div className="card-body mb-5">
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                        <form className='mb-4' onSubmit={handleSubmit(create)}>
                            <label className="label" aria-hidden="true">Account</label>
                            <div className='text-center'>
                                <span className="material-symbols-outlined" style={{ fontSize: "100px" }}>
                                    passkey
                                </span>
                            </div>
                            <Input
                                label="Full Name: "
                                placeholder="Full Name"
                                {...register("name", {
                                    required: true,
                                })}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <span className="material-symbols-outlined">
                                            person
                                        </span>
                                    </InputAdornment>
                                }
                                className='mb-4'
                            />
                            <br/>
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
                                placeholder='Email Id' 
                                className='mb-4'/>
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
                                        style={{ color: 'rgb(199, 98, 98)', }} 
                                        className={({ isActive }) =>
                                            `${isActive ? "link-color" : "nav-link"}`
                                        } to={'/login'}>login</NavLink>
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

                                            <button className='button mt-5 form-control'>Create Account</button>
                                        </>
                                    )
                            }

                            {/* <button type="reset" className='button mt-3 form-control'  >Sign Up</button> */}
                            {/* <h6 className='forgot-password'><Link style={{ color: 'red' }} to={'/forgotPassword'}>Sign Up</Link></h6> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup