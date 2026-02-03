import React, { useEffect, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import NavMenu from './navMenu'
import useMobile from '../../hooks/useMobiel'
import FixedMenu from './fixedMenu'

export default function Header() {
    const [fixedMenu, setFixedMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)
    const isMobile = useMobile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className='container flex justify-between flex-wrap align-center'>
                    <Link
                        className='site-logo'
                        to="/">
                        <img src={`${isScrolled ? "assets/logo-dark.png" : "assets/logo.png"}`} alt="logo" />
                    </Link>
                    <div className='headr-right-side flex'>
                        {!isMobile && <NavMenu />}
                        <button
                            onClick={() => setFixedMenu((prev) => !prev)}                        >
                            <img
                                src="assets/humb-icon.svg"
                                alt="menu"
                                style={{ filter: isScrolled ? 'invert(1)' : 'invert(0)' }}
                            />
                        </button>
                    </div>
                </div>
            </header>
            <FixedMenu fixed={fixedMenu} setFixedMenu={setFixedMenu} />
        </>
    )
}
