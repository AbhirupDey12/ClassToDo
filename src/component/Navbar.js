import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Navbar() {

     const navLinkStyles = ( {isActive} ) => {
          return {
               fontWeight : isActive ? 'bold' : 'normal' ,
               textDecoration : isActive ? 'none' : 'underline'
          }
     }

     const auth = useAuth() ;

     return (
          <nav>
               <NavLink to='/' style={navLinkStyles} >Home</NavLink>
               <NavLink to= '/about' style={navLinkStyles}  >About</NavLink>
               <NavLink to= '/products' style={navLinkStyles}  > Products </NavLink>
               <NavLink to= '/profile' style={navLinkStyles}  > Profiles </NavLink>
               {
                    !auth.user && (
                         <NavLink to= '/login' style={navLinkStyles} > Login </NavLink>
                    )
               }
          </nav>
     )
}

export default Navbar;