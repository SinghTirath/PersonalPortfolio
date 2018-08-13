import React,{Component} from 'react';
import './Portfolio.css';
class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio">
            
            <a name="services" />
            <h1 className="display-3">Portfolio</h1>
            <div className="content-section-a">
              <div className="container">
                <div className="row">

                  <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Wordpress Site</h2>
                    <p className="lead">This is a Wordpress site built by me as a part college group project for the a college sustainability Club . Built using Wordpress, PHP, CSS and Google API. <br/>The project can be viewed live <a href="http://tirathsingh.tk/LSC">here</a>.</p>
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="/Assets/LSC.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section-b">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Library Database</h2>
                    <p className="lead"> This is a library database website. It is a full stack wep app built using HTML, PHP, MYSQL and BootStrap. This website allow Students and Librarian to login to the system and manage thier books. Libraians can checkout books using this app and Students can see all the books they owe.<br />The project can be viewed live <a href="http://tirathsingh.tk/Library">here</a>.</p>
                  </div>
                  <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                    <img className="img-responsive" src="/Assets/Library.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section-a">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Portfolio Website</h2>
                    <p className="lead">This is a personal website created for portfolio. This website is created using React JS, Bootstrap , CSS and Google Map API. This is a Single page web app. <br />The project can be viewed live <a href="http://tirathsingh.tk/">here</a>.</p>
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="/Assets/portfolio.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section-b">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Job Search App</h2>
                    <p className="lead"> This is a Job Search App made using the React Library and Github's JOB API. You can search the job in different location and see the list of jobs. You can click on each job to see the description. of the Job <a href="http://tirathsingh.tk/JobApp">here</a>.</p>
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="/Assets/JobApp.png" />
                  </div>
                </div>
              </div>
            </div>
            
            
            </div>
        );
    }
}

export default  Portfolio;