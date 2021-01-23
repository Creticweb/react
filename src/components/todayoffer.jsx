import React from "react";
import TodaySpecial from "../img/Todayspecialimg.png";
import donut from "../img/donut.png";

function TodayOffer () {
  return (
    <div>
      <div className="special-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6">
              <div className="special-img">
                <img src={TodaySpecial} className="w-100" alt="Today's Special img" />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6">
              <div className="special-content text-center">
                <div className="donut-icon m-auto">
                  <img src={donut} className="w-100" alt="Donut" />
                </div>
                <h2>
                  Today’s Special
                  <span>Surprise For You</span>
                </h2>
                <p>
                  It is a long established fact that a will distracted readable content of a page when looking at its the layout using Lorem Ipsum is that it has a normal distribution
                  <span> as opposed to using making it look like.</span>
                </p>
                <div className="offer-info">
                  <div className="form-row justify-content-center align-items-center">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <div className="item-price">
                        <h3><span>$</span>89.00</h3>
                        <span><i className="icofont-clock-time" /> 25 min away</span>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <div className="item-number">
                        <div className="item-quantity">
                          <button><i className="icofont-plus" /></button>
                          <span>02</span>
                          <button><i className="icofont-minus" /></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <a href="#" className="btn order-btn">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default TodayOffer;