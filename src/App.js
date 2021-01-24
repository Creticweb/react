import React, {Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/navbar";
//import AdminHome from "./backend/home";


const Home = React.lazy(() => import('./components/home'));
const About = React.lazy(() => import('./components/about'));
const Todo = React.lazy(() => import('./components/todo'));
const API = React.lazy(() => import('./components/api'));

function App() {
  return (
    <>
    <Suspense fallback={<div><div class="preloader-wrap">
        <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div></div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/todo" component={Todo}/>
          <Route path="/api" component={API}/>
        </Switch>
      </Router>
     </Suspense>
    </>
  );
}

export default App;
