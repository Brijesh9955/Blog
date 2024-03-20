
//  - - - - - - - - - - - - - - - - - - - - - -   BLOG API IN REACT

// https://www.wix.com/website-template/view/html/1872?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fblog&tpClick=view_button&esi=ad5e5c67-770d-4889-b046-d25c45bf4d32

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './Blog-API/Header';
import Usignup from './Blog-API/User/Usignup';
import Home from './Blog-API/Home';
import Ulogin from './Blog-API/User/Ulogin';
import Cblog from './Blog-API/Blog/Cblog';
import Blog from './Blog-API/Blog/Blog';
import Footer from './Blog-API/Footer';



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* User Pages */}
          <Route path="/user/signup">
            <Usignup></Usignup>
          </Route>

          <Route path="/user/login">
            <Ulogin></Ulogin>
          </Route>

          {/* User Pages */}
          <Route path="/blog/create">
            <Cblog></Cblog>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

//  catagery.
// logout
// protect.

export default App;
