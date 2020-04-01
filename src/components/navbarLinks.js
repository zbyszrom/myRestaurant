import React from 'react'
import {Link} from 'gatsby'

const NavbarLinks =()=>{
    return(
        <>
        <Link to = '/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to = '/menu'>Menu</Link>
        <Link to = '/contact'>Contact</Link>
        </>

    )
}

export default NavbarLinks