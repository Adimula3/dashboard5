import React from "react";
import '../styles/style.css';


function Navbar() {

    return (
       <nav className="header d-flex">
           <h2>Welcome back,John</h2>
           <div className="search-bar">
               <form className="search-form d-flex align-items-center" method="POST" action="#">
                   <input className="search-box" type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                       <button type="submit" title="Search"><i className='bx bx-search'></i></button>
               </form>
           </div>
           <div className="right-nav d-flex">
               <img className="country" src={require('../assets/Ellipse3.png')} alt=""/>

               <i className='bx bx-moon'></i>
               <i className='bx bx-bell'></i>

               <img className="profile" src={require('../assets/Ellipse3.png')} alt=""/>
           </div>
       </nav>
    );
}


export default Navbar;
