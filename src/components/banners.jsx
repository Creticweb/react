import React , { useState, useEffect , Suspense} from "react";
import axios from "axios";

 function Banners (props)
     {
       const [banners , setBanners]=useState([]);
       
       useEffect(() =>{
         getBanners();
       },[]);
       
       const getBanners = () => {
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
             <div class="home-services-section">
	<div class="container">
		<div class="home-services">
			<div class="form-row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<div class="image-box clearfix">
                                           {banners.map ((item,index) => {
               return (
						<div key ="indec"class="box-image float-left"> <img src="img/honney.png" alt="" /> </div>
						<div class="image-text float-left">
							<h2>{item.name}</h2>
							<p>{item.description}</p>
						</div>
                                             );
            })}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
            </Suspense>
            );
            })}
         </div>
         );
     }
  export default Banners;
