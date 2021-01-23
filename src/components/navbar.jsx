import React , { useState, useEffect , Fragment} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.png";


function Navigation (props) {
  const [navlink , setNavLink] = useState([]);
  
useEffect(() => {
    getNavLinks();
  },[]);
  
const getNavLinks = () => {
    axios 
      .get('https://test.yarnroad.com/api/navbar-list').then((response) => {setNavLink(response.data);
        })
      .catch((error) => {
        console.log(error);
      });
  };
return(
  <Fragment>
    <header>
        <div class="header py-1">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light px-0 py-0">
                  <a class="navbar-brand" href="/">
                    <div class="logo">
                     <img src={logo} class="w-100 img-fluid" alt="logo" />
                      </div>
                    </a>
                    <div class="open-time">
                        <h6><i class="icofont-clock-time"></i> Open Now</h6>
                        <span>8AM - 10PM</span>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="icofont-navigation-menu"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav navbar-custom">
                      {navlink.map ((item,index) => {
                      return (
                      <li key="index" class="nav-item">
                        <a class="nav-link" href={item.PageLink}> <Link to={item.PageLink}>{item.PageTitle}</Link></a>
                            </li>
                                                    );
                        })}
                            <li class="nav-item last-menu-bg">
                                <span class="nav-link"><a href="tel:+919614852927">+2 364 98 672</a></span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  </Fragment>
);
}
export default Navigation;
