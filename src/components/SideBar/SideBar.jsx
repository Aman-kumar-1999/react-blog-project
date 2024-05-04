import { Avatar, IconButton, InputAdornment } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/SideBar.css'


export default function SideBar() {

  return (
    <>
      <div className="list-group sidebar">
        <ul className="list-group">
          <li className="list-group-item noborder">

            <br />
            <IconButton>
              <Avatar style={{ width: 100, height: 100 }} src='avatar2.png' />
            </IconButton>
            <br />
            <div id='profile'>
              <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogo' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
            </div>
            {/* <h6 id='name'>{userContxtData.user.data.firstName} {userContxtData.user.data.lastName}</h6> */}
            {/* <h6 id='name'>{JSON.parse(sessionStorage.getItem('loginUser')).firstName} {JSON.parse(sessionStorage.getItem('loginUser')).lastName}</h6>
            <h6 id='post'>{JSON.parse(sessionStorage.getItem('loginUser')).profile}</h6>
            <h6 id='post'>{sessionStorage.getItem('Role')}</h6> */}
            <h6 id='name'>Aman Kumar</h6>
            <h6 id='post'>Developer</h6>
            <h6 id='post'>Admin</h6>
          </li>
        </ul>
        
        <NavLink type="button"
          className=
          {({ isActive }) =>
            `${isActive ? "float-sidebar-active" : "float-sidebar"}`
          }
          to={'/'}
        >
          <IconButton position="start">
            <span className="material-symbols-outlined ">
              house
            </span>
          </IconButton>
          Home
        </NavLink>
        <NavLink type="button"
          className=
          {({ isActive }) =>
            `${isActive ? "float-sidebar-active" : "float-sidebar"}`
          }
          to={'/dashboard'}
        >
          <IconButton position="start">
            <span className="material-symbols-outlined">
              streetview
            </span>
          </IconButton>
          Dashboard
        </NavLink>
        <NavLink type="button"
          className=
          {({ isActive }) =>
            `${isActive ? "float-sidebar-active" : "float-sidebar"}`
          }
          to={'/CBE-XII'}
        >
          <IconButton position="start">
            <span className="material-symbols-outlined">
              file_upload
            </span>
          </IconButton>
          CBE-XII</NavLink>
        <NavLink type="button"
          className=
          {({ isActive }) =>
            `${isActive ? "float-sidebar-active" : "float-sidebar"}`
          }
          to={'/CBE-XIII'}
        >
          <IconButton position="start">
            <span className="material-symbols-outlined">
              file_upload
            </span>
          </IconButton>
          CBE-XIII</NavLink>
      </div>
    </>
  )
}
