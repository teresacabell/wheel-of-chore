import React from 'react';
// import signUp from './pages/sign-up/index'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/">
        <signUp />
      </Route>
    </div>
    </Router>
    

  );
}

export default App;
