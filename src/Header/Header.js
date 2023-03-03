import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../Aplication/firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    };

  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img 
            src='https://img.wprost.pl/img/nowe-logo-gmaila/d2/69/e3be3ce5172937c39f2709900f10.jpeg' 
            alt='' 
            />
        </div>

        <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type='text' />
            <ArrowDropDownIcon className='header__inputCaret' />
        </div>

        <div className='header__right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} />
            </IconButton>
        </div>
    </div>

  )
}

export default Header