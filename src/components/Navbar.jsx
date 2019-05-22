import React,{ Component } from "react";
import {Link,withRouter} from 'react-router-dom';

 import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true,
        };
        }
        toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed,
        });
        }

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
                        <button className="btn btn-outline-success my-2 my-sm-0" >Login</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                       <button className="btn btn-outline-success my-2 my-sm-0" >Register</button>
                    </Link>
                </li>
            </ul>                                            
        )

        const userLink=(
            <ul className ="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
<button className="btn btn-outline-success my-2 my-sm-0" >User</button>
                       
                    </Link>

                </li>
<li className="nav-item">
                    <Link to="/search" className="nav-link">
<button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                       
                    </Link>

                </li>
                <li className="navbar-nav">
                   
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                       <button className="btn btn-outline-success my-2 my-sm-0" >Logout</button>
                    </a>
                </li>                             
            </ul>
        )

        const collapsed = this.state.collapsed;
 const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
 const classTwo = collapsed ? 'navbar-toggler navbar-toggler collapsed' : 'navbar-toggler navbar-toggler';
        
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <button 
                className={`${classTwo}`}
                onClick={this.toggleNavbar}
                type="button"
                data-toggle="collapse"
                data-target="navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${classOne}`}  id="navbarResponsive">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active " >
                            <Link to ="/" className="nav-link">
                                 <button className="btn btn-outline-success my-2 my-sm-0" >Home</button>
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
