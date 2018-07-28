import React,{Component} from 'react';
import './Home.css'
class Home extends Component{
    render(){
        return(
            <div>
                <a name="about"></a>
            <div className="intro-header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="intro-message">
                      <h1>Tirath Singh</h1>
                      <h3>Web Developer</h3>
                      <hr className="intro-divider" />
                      <ul className="list-inline intro-social-buttons">
                        <li><a href="https://twitter.com/tirathsidhu3s" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a></li>
                        <li><a href="https://github.com/SinghTirath" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/tirathsingh6/" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="display-3">About</h1>
            <hr/>

            <div className="row featurette">
                <div className="col-md-7 order-md-2 customPad">
                    <h2 className="featurette-heading">Hi,I'm Tirath, Web Developer</h2>
                    <p className="lead">Hello, my name is Tirath Singh. I finished my Diploma in Computer Science from Langara College and actively looking for new opportunities. I have experience in designing beautiful and single page web apps using React Library. I have also experience in degining full stack apps using Express.JS framework. Feel free to contact me and check out my portflio. Have a great day!      </p>
                </div>
                <div className="col-md-5 order-md-1 customPad">
                    <img className="featurette-image img-fluid mx-auto rounded-circle" src="/Assets/GradPic.jpg" alt="Generic placeholder image"/>
                </div>
            </div>
            <hr/>
            <h1 className="display-3">Skills</h1>
            <hr/>
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="display-4 center">Professional</h3>
                    <hr/>
                    <ul class="list-group ult">
                        <li class="list-group-item lit">Javascript</li>
                        <li class="list-group-item lit ">Java</li>
                        <li class="list-group-item lit ">Python</li>
                        <li class="list-group-item lit ">C++</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                <h3 className="display-4 center">Peronal</h3>
                    <hr/>
                    <ul class="list-group ult">
                        <li class="list-group-item lit">Team Player</li>
                        <li class="list-group-item lit">Communication</li>
                        <li class="list-group-item lit ">Problem Solving Skills</li>
                        <li class="list-group-item lit">Interpersonal Skills</li>
                    </ul>
                </div>
                <br/>
            </div>
            
        </div>

            
        );
    }
}

export default Home;
