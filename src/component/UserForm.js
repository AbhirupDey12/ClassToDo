import React, { useState } from 'react'
import useInput from '../Hooks/useInput';

function UserForm() {

     const [lastName, setLastName] = useState('');

     const [firstName, bindFirstName, resetFirstName] = useInput('');
     const [laststName, bindLaststName, resetLaststName] = useInput('');

     const submitHandler = (e) => {
          e.preventDefault();
          alert(` Hello ${firstName} ${lastName} `);
          resetFirstName() ;
          resetLaststName() ;
     }

     return (
          <div>
               <form onSubmit={submitHandler} >
                    <div>
                         <label> First Name </label>
                         <input type="text" {...bindFirstName} />
                    </div>
                    <div>
                         <label> Last Name </label>
                         <input type="text" {...bindLaststName} />
                    </div>
                    <button type='submit'>Submit</button>
               </form>
          </div>
     )
}

export default UserForm