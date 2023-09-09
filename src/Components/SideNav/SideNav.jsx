import React from 'react'
import "./SideNav.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom';

export default function SideNav() {
    return (
        <div className='side-nav-container'>
            <div className="profile">
                <div className="profile-image">D</div>
                <span>Account</span>
            </div>

            <ul className='list-container'>
                <Link to='/sign-in'>
                    <li className='profile-link' id='signIn'>
                        <PersonOutlineIcon />
                        <span >Sign In</span>
                    </li>
                </Link>
                <Link to='/create-account'>
                    <li className='profile-link' id='signUP'>
                        <PersonOutlineIcon />
                        <span>Create Account</span>
                    </li>
                </Link>
                <Link>
                    <li className='profile-link' id='wishlist'>
                        <FavoriteBorderIcon />
                        <span>Wishlist</span>
                    </li>
                </Link>
                <Link>
                    <li className='profile-link' id='compare'>
                        <SwapHorizIcon />
                        <span>Compare</span>
                    </li>
                </Link>
                <Link>
                    <li className='profile-link' id='help'>
                        <HelpIcon />
                        <span>Help</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
