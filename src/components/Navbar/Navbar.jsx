import React from 'react'
import './Navbar.scss'
import logo1 from '../../assets/Logo1.png'
import menu_icon from '../../assets/menu_icon.png'
import close_icon from '../../assets/close_icon.png'

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
                <a href="">About Us</a>
                <a href="">Houses</a>
                <a href="">Our Agents</a>
                <a href="">Contact Us</a>
            </div>
            <div className="nav-right">
                <button className='signin'>Sign In</button>
                <button className='register'>Sign Up</button>
                <div className="menu-icon">
                    {/* Toggle Menu Icon */}
                    <img src={isOpen ? close_icon: menu_icon} alt="Menu Icon" onClick={()=>setIsOpen((prev)=>!prev)}/>
                </div>

                {/* Mobile Menu */}
                <div className={`menu ${isOpen ? 'active' : ''}`}>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Houses</a>
                <a href="">Our Agents</a>
                <a href="">Contact Us</a>
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar