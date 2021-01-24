import React , { useState, useEffect , Suspense} from "react";
import axios from "axios";

 function Banners (props)
     {
       const= [banners , setBanners]=useState([]);
       
       useEffect(() =>{
         getBanners();
       },[]);
       
       const getTodos = () => {
         axios 
           .get('https://test.yarnroad.com/api/banner-list').then((response) => {setBanners(response.data);
           })
      .catch((error) => {
        console.log(error);
      });
  };
       return(
         <div>
          {banners.map ((item,index) => {
          return (
           <Suspense fallback={<div> Loading .....</div>}>
             <h1>{item.name}</h1>
            </Suspense>
            );
            })}
         </div>
         );
     }
  export default Banners;