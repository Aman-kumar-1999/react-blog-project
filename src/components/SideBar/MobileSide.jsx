import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Avatar, IconButton, Paper } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MobileSide() {
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const list = (anchor) => (
        <Box
            // border="1px dashed grey" p={[2, 3, 4]} m={2}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
            <ul className="list-group">
                <ListItem className="list-group-item sidebarProfile">

                    <br />
                    <IconButton>
                        <Avatar style={{ width: 100, height: 100 }} src='avatar2.png' />
                    </IconButton>
                    <br />
                    <div id='profile'>
                        <Link className='' to={'/editUserImage'}><span className='material-symbols-outlined sidebarLogoMobile' data-bs-dismiss="offcanvas" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home">edit_square</span></Link>
                    </div>
                    {/* <h6 id='name'>{userContxtData.user.data.firstName} {userContxtData.user.data.lastName}</h6> */}
                    {/* <h6 id='name'>{JSON.parse(sessionStorage.getItem('loginUser')).firstName} {JSON.parse(sessionStorage.getItem('loginUser')).lastName}</h6>
            <h6 id='post'>{JSON.parse(sessionStorage.getItem('loginUser')).profile}</h6>
            <h6 id='post'>{sessionStorage.getItem('Role')}</h6> */}
                    <h6 id='nameMobile'>Aman Kumar</h6>
                    <h6 id='post'>Developer</h6>
                    <h6 id='postMobile'>Admin</h6>
                </ListItem>
            </ul>
            <List>
                {['Home', 'Dashboard', 'CBE-XII', 'CBE-XIII'].map((text, index) => (
                    <NavLink key={text} to={`${text}`}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <>
                                    <IconButton position="start">
                                        <span className="material-symbols-outlined ">
                                            house
                                        </span>
                                    </IconButton>
                                </> : index === 1 ? <>

                                    <IconButton position="start">
                                        <span className="material-symbols-outlined">
                                            streetview
                                        </span>
                                    </IconButton>

                                </> : <>
                                    <IconButton position="start">
                                        <span className="material-symbols-outlined">
                                            file_upload
                                        </span>
                                    </IconButton>
                                </>
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
            {/* <Divider /> */}
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <div >
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Paper sx={{ position: 'relative',bottom: 94, left: -150, right: 0, display:'inline', zIndex:'0'}} elevation={3}>
                        <BottomNavigation 
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction
                                label="" className="mobile-sidebar-button"
                                onClick={toggleDrawer(anchor, true)}
                                icon={<span className="material-symbols-outlined">
                                    menu_open
                                </span>}
                            />
                            {/* <Button className="mobile-sidebar-button" onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                            {/* <BottomNavigationAction label="Favorites"  />
                            <BottomNavigationAction label="Archive"  /> */}
                        </BottomNavigation>
                    </Paper>
                    {/* <Button className="mobile-sidebar-button" onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        style={{ borderRadius: '400px' }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

        </div>

    );
}
