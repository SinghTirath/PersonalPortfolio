import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div  className="cusfooter" >
                <footer className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-inline">
                        <li><a href="#">Home</a></li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li><a href="#about">About</a></li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li><a href="#services">Services</a></li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                        <p className="copyright text-muted small">Copyright &copy; Tirath Singh. 2018</p>
                    </div>
                    </div>
                </div>
                
                </footer>
            </div>
        );
    }
}

export default Footer;