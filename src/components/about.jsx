import React, { useState, useEffect , Fragment } from "react";

function About () {
  const [user , setUser] = useState ([])
  
  useEffect(()=>{
    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{data.json().then(result=>{console.warn("result",result)
                setUser(result.data)
    })
      })
  },[])
  return (
     <Fragment>
       {
         user.map((item)=>
          <h1>{item.id}</h1>
         )
       }
     </Fragment>
    );
}
export default About;