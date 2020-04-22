import React from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./utils/PrivateRoute";
import Friends from "./components/Friends";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Friends</h1>

      <BrowserRouter>
       <p> <Link to="/login">Login</Link></p>
<p>
          <Link to="/protected">Protected Page</Link>

</p>        
        <Route path = "/login" component={LoginForm} />
        <PrivateRoute path="/protected" component={Friends} />

      </BrowserRouter>
    </div>
  );
}

export default App;
