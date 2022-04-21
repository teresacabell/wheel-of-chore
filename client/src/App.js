import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/sign-up';
import Home from './pages/Home/index';

function App() {
  return (
    <Router>
      <div className="App">
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
