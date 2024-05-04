
import React from 'react'
import '../css/Header.css'
import { Input, InputAdornment } from '@mui/material'

export default function Search() {
    return (
        <>
            <div className="inline-element">
                {/* <span className="material-symbols-outlined search-icon">
                    search
                </span> */}
                <Input type='text'
                    // variant="outlined"
                    className='inline-element'
                    // style={{border:'none'}}
                    placeholder='Search ...'
                startAdornment={
                    <InputAdornment className='removeunderline' position="start">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </InputAdornment>
                }
                />
            </div>

        </>
    )
}
