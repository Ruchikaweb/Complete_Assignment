import React from 'react';
import {Link} from 'react-router-dom';
import Change from './change'
const Navbar =() => { 
    return(
        <React.Fragment>
           <nav className="navbar navbar-inverse ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> 
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                            <span className="icon-bar"></span>                        
                        </button> 
                        <Link to="/" className="navbar-brand">Blood Donate</Link>
                    </div> 
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                    <li> <Link to="/">HOME</Link></li> 
                        <li> <Link to="/ELIGIBILITY">ELIGIBILITY</Link></li> 
                        <li> <Link to="/Compability"> COMPABILITY</Link></li>
                        <li><Link to="/Bloodfacts"> BLOOD FACTS</Link></li>
                        <li><Link to="/Donarregister"> DONAR REGISTER</Link></li>
                        <li><Link to="/Searchdonar"> SEARCH DONAR</Link></li>
                        <li><Link to="/bookinglist"> DONAR LIST </Link></li>
                        <li><Link to="/Bloodrequired"> BLOOD REQUIRED </Link></li> 
                        <li> <Change/> </li> 
                    </ul>
                    </div> 
                </div>
            </nav>
        </React.Fragment>
    )
} 

export default Navbar;