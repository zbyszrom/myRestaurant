import React from 'react'
//import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = ()=>{
    return(
       <footer>
           <div>
           <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter size = '1.8rem'/></a>
          <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size = '1.8rem'/></a>
           </div>
           <p>Copyright &copy; 2020. All Rights Reserved</p>
       </footer>
    )
}

export default Footer