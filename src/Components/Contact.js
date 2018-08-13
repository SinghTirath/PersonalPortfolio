import React,{Component} from 'react';
import Map from './Map.js';

import './Contact.css';
class Contact extends Component{
    render(){
        return(
            <div className='Contact'>
                <a name="contact"></a>
                <h1 className="display-3">Contact</h1>
                <hr/>
                <div className="banner">
                <div className="container">

                 <div className="row">
                    <div className="col-sm-6">
                    <h2>Connect to Tirath:</h2>
                       
                        <div className="col-lg-6">
                            <ul className="list-inline banner-social-buttons">
                            <li><a href="https://twitter.com/tirathsidhu3" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a></li>
                            <li><a href="https://github.com/SinghTirath" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a></li>
                            <li><a href="https://www.linkedin.com/in/tirathsingh6/" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a></li>
                        </ul>
                        </div>
                    </div>
                     <div className="col-sm-6 map">
                         <div style={{width: '90%', height: '400px'}}>
                            <Map/>
                         </div>
                    </div>
                    <br/>
                 </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;


    