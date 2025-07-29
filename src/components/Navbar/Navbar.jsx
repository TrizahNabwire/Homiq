import React from 'react'
import './Navbar.scss'
import logo1 from '../../assets/Logo1.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
        <nav>
            <div className="nav-logo">
                <img src={logo1} alt="Logo" />
            </div>
            <div className="nav-left">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Houses</a>
                <a href="">Our Agents</a>
                <a href="">Contact Us</a>
            </div>
            <div className="nav-right">
                <button className='signin'>Sign In</button>
                <button className='register'>Sign Up</button>
                <div className="menu-icon">
                    <img src={menu_icon} alt="" onClick={()=>setIsOpen((prev)=>!prev)}/>
                </div>
                <div className={setIsOpen ? 'menu active' : 'menu'}>
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