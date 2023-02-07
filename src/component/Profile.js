import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';

function Profile() {
     const auth = useAuth() ;
     const navigate = useNavigate() ;

     const handleLogOut = () => {
          auth.logOut() ;
          navigate('/') ;
     }

     return (
          <div>
               Welcome {auth.user}
               <button onClick={handleLogOut} >Logout</button>
          </div>
     )
}

export default Profile