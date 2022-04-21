import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/sign-up';
import Home from './pages/Home/index';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          <Link className="navbar-brand" to={"/signup"}>Wheel Of Chore</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to={"/signUp"}className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
      <Route exact path={"/login"}>
        <Login></Login>
      </Route>
      <Route exact path={"/signup"}>
        <SignUp />
      </Route>
    </Switch>
    </div>
    </Router>
    

  );
}

export default App;
