import React,{Component} from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top ">
                <NavItem  className="nav-link navbar-brand" eventKey={1} componentClass={Link} href="/" to="/"><span className="navItem">Tirath Singh</span></NavItem>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                        <NavItem  className="nav-link" eventKey={1} componentClass={Link} href="/" to="/"><span className="navItem">Home</span></NavItem>

                    </li>
                    <li className="nav-item">
                        <NavItem  className="nav-link" eventKey={1} componentClass={Link} href="/portfolio" to="/portfolio"><span className="navItem">Portfolio</span></NavItem>
                    </li>
                    <li className="nav-item">
                        <NavItem  className="nav-link" eventKey={1} componentClass={Link} href="/contact" to="/contact"><span className="navItem">contact</span></NavItem>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
<a class="nav-link" href="#about">About</a>