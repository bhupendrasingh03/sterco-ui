import React from 'react'
import { Link } from 'react-router-dom';

export default function FixedMenu({
    fixed,
    setFixedMenu
}) {


    return (
        <div
            className={fixed ? 'fixedMenu active' : 'fixedMenu'}>
            <div className='fixedMenu-content'>
                <div className='flex head justify-between'>
                    <Link
                        className='site-logo' to='/'>
                        <img src="assets/logo-dark.png" alt="logo" />
                    </Link>
                    <button
                        onClick={() => setFixedMenu((prev) => !prev)}
                        className='close-menu'>
                        <img src="assets/close.png" alt="menu" />
                    </button>

                </div>
                <div className=''>
                    <Link className='links' to='/about'>About us</Link>
                    <Link className='links' to='/industry'>industry</Link>
                    <Link className='links' to='/services'>Services</Link>
                    <Link className='links' to='/career'>career</Link>
                    <Link className='links' to='/contact'>Contact us</Link>
                </div>
            </div>
        </div>
    )
}
