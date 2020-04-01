import React from 'react'
//import {useState} from 'react'
import {Link} from 'gatsby'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import NavbarLinks from './navbarLinks'
import logo from '../images/logo.svg'

const Navbar = ()=>{

    //const [navbarOpen, setNavbarOpen] = useState(false)


    return(
    <nav>
    <Link to="/">
        <img src={logo} alt="company logo" />
    </Link>
    <NavbarLinks/>
    <div>
      <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
      <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter size = '1.8rem'/></a>
      <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size = '1.8rem'/></a>
    </div>
    </nav>
    )
}

export default Navbar