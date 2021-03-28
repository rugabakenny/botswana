import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Tourism from './components/Tourism'

import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route> 
        
        <Route path="/signin">
          <Signin/>
        </Route>    

        <Route path="/tourism">
          <Tourism/>
        </Route>  
      </Switch>
    </Router>
    );
}

export default App;
