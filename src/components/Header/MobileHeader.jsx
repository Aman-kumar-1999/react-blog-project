import React from 'react'
import Logo from '../../template/Logo'
import Search from '../../template/Search'
import RightHeader from '../../template/RightHeader'
import HeaderSpace from '../../template/HeaderSpace'
import '../../css/Header.css'
import { useSelector } from 'react-redux'
import { Avatar, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MobileHeader() {

    const authStatus = useSelector(state => state.auth.status)

    return (
        <>
            <div className="header">

                <Link to={'/'}>

                    <Logo className='logo' />
                </Link>
                <p className='inline-element mobileSpace'></p>
                {/* <HeaderSpace /> */}
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
                <br />

                {
                    authStatus ? (<>


                        <Search />
                    </>) : (<>

                    </>)
                }


            </div>

        </>
    )
}
