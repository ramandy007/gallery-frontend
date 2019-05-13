import React,{ Component } from "react";
import {Link,withRouter} from 'react-router-dom';
 import './navbar.css';

class Navbar extends Component {

    logOut(e){
        e.preventDefault();
            localStorage.removeItem('usertoken');
            this.props.history.push(`/`);
        
    }


    render(){

        const loginRegLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <button class="btn btn-outline-success my-2 my-sm-0" >Login</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                       <button class="btn btn-outline-success my-2 my-sm-0" >Register</button>
                    </Link>
                </li>
            </ul>                                            
        )

        const userLink=(
            <ul className ="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
<button class="btn btn-outline-success my-2 my-sm-0" >User</button>
                       
                    </Link>

                </li>
<li className="nav-item">
                    <Link to="/search" className="nav-link">
<button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
                       
                    </Link>

                </li>
                <li className="navbar-nav">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       <button class="btn btn-outline-success my-2 my-sm-0" >Logout</button>
                    </a>
                </li>                             
            </ul>
        )
        
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" 
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav mr auto ">
                        <li className="nav-item active " >
                            <Link to ="/" className="nav-link">
                                 <button class="btn btn-outline-success my-2 my-sm-0" >Home</button>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink :loginRegLink}
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
