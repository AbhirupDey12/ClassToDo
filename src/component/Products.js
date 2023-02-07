import React from 'react';
import { Link , Outlet } from 'react-router-dom';

function Products() {
     return (
          <>
               <div>
                    <input type="search" placeholder='Search Products...' />
               </div>
               <nav className='primary-nav' >
                    <Link to= "featured" >Featured</Link>
                    <Link to= 'new' > New Product </Link>
               </nav>
               <Outlet />
          </>
     )
}

export default Products