import React from 'react'
import './Navbar.scss'
import logo1 from '../../assets/Logo1.png'
import menu_icon from '../../assets/menu_icon.png'
import close_icon from '../../assets/close_icon.png'
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
        <nav>
            <div className="nav-logo">
                <a href="/"><img src={logo1} alt="Logo" /></a>
            </div>
            <div className="nav-left">
                <a href="/">Home</a>
                <HashLink smooth to="/#about">About Us</HashLink>
                <HashLink smooth to="/list">Houses</HashLink>
                <HashLink smooth to="/#agents">Our Agents</HashLink>
            </div>
            <div className="nav-right">
                <HashLink smooth to="/#contact"><button className='contact'>Contact Us</button></HashLink>
                <div className="menu-icon">
                    {/* Toggle Menu Icon */}
                    <img src={isOpen ? close_icon: menu_icon} alt="Menu Icon" onClick={()=>setIsOpen((prev)=>!prev)}/>
                </div>

                {/* Mobile Menu */}
                <div className={`menu ${isOpen ? 'active' : ''}`}>
                <a href="/">Home</a>
                <HashLink smooth to="/#about">About Us</HashLink>
                <a href="/list">Houses</a>
                <HashLink smooth to="/#agents">Our Agents</HashLink>
                <HashLink smooth to="/#contact">Contact Us</HashLink>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar