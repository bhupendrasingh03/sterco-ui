import { Link } from 'react-router-dom'

export default function NavMenu() {
    return (
        <nav className='site-nav flex'>
            <Link to='/about'>About us</Link>
            <Link to='/industry'>industry</Link>
            <Link to='/services'>Services</Link>
            <Link to='/career'>career</Link>
            <Link to='/contact'>Contact us</Link>
        </nav>
    )
}
