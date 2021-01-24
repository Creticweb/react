import React,{Suspense} from "react";
import Bubble from "../img/bubble.png";
import burger from "../img/burger1.png";
import TodayOffer from "./todo";
import Banners from "./banners";

function Home () {
  return (
    <>
     <div class="home-hero-section">
        <div class="bubble">
            <img src={Bubble} alt="bubble-images " class="w-100 img-fluid" />
        </div>
      <div class="container">
        <div class="row align-items-center">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
               <div class="home-hero-content">
                 <h1>Take <strong>Foo</strong> & <strong>Let’s</strong> <span>Go.</span>
                 </h1>
                <p>Have any food on your mind?<span> 
                  <a href="contact.html">Just order now!</a>
                   </span>
                </p>
               <a class="btn menu-btn" href="#food-menu">Today's Menu <i class="icofont-double-right"></i>
               </a>
            </div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="burger-img">
               <img src={burger} class="w-100 img-fluid" alt="Burger" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Suspense fallback={<div><div class="preloader-wrap">
        <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div></div>}>
  <TodayOffer />
  <Banners />
 </Suspense>
</>
    );
}
export default Home;