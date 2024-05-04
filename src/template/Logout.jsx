import { Avatar, Button, IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import '../css/Login.css'
// import { FormHelperText, Input, InputAdornment } from '@mui/material'

export default function Logout() {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const { register, handleSubmit } = useForm()
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false);

    const logoutHandler = async () => {
        // setLoading(true)
        // setError("")
        try {
            const session = await authService.logout()
            // if (session) {
                // const userData = await authService.getCurrentUser()
                // console.log('User Data : ',userData)
                // if (userData)
                dispatch(logout())
                // setLoading(false);
                navigate("/login")

            // }
        } catch (error) {
            // setLoading(false);
            // setError(error.message)
        }
    }

    const myStyle = {

        backgroundColor: '#116D6E',
        ':hover': {
            backgroundColor: '#0d4d4e',
            // color: 'white',
        }
    }
    return (       
        <IconButton 
        // style={myStyle} 
        onClick={logoutHandler}>           
            <Avatar style={{width:'20px',height: '20px'}} src='power_off.png'/>
        </IconButton>
    )
}
