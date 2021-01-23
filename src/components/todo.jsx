import React , { useState, useEffect } from "react";
import axios from "axios";
import TodaySpecial from "../img/Todayspecialimg.png";
import donut from "../img/donut.png";

function Todo (props) {
  const [todo , setTodo] = useState([]);
  
  useEffect(() => {
    getTodos();
  },[]);
  
  const getTodos = () => {
    axios 
      .get('https://test.yarnroad.com/api/todayoffer').then((response) => {setTodo(response.data);
        })
      .catch((error) => {
        console.log(error);
      });
  };
  return(
    <>
      {todo.map ((item,index) => {
        return (
      <div key={index} className="special-section">
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
                  {item.item}
                  <span> {item.items}</span>
                </h2>
                <p>
                  {item.description}
                  <span> {item.descriptions}</span>
                </p>
                <div className="offer-info">
                  <div className="form-row justify-content-center align-items-center">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                      <div className="item-price">
                        <h3><span>₹</span> {item.price}</h3>
                        <span><i className="icofont-clock-time" />{item.delivery}</span>
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
                      <a href="/" className="btn order-btn">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          );
      })}

    </>
    );
}
export default Todo ;
