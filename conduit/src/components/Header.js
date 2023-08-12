import React from "react";
import {Link , NavLink} from 'react-router-dom';
import '../style/header.scss'
export default function Header(){
    return(
        <>  
          <div className="flex container">
            <div>
                <Link to='/'><h2>Conduit</h2></Link>
            </div>
            <ul className="flex">
               <li> <NavLink activeclassname='active' to='/' exect>Home</NavLink></li>
               <li> <NavLink activeclassname='active' to='/login' exect>Sing in</NavLink></li>
               <li>  <NavLink activeclassname='active'  to='/signup' exect>Sign up</NavLink></li>

            </ul>
            

        
        </div>
        </>

    )
}