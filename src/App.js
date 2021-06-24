import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Body from "./components/Body/Body";
import ClubDetails from "./components/ClubDetails/ClubDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Body></Body>
          </Route>
          <Route path="/club/:idTeam">
            <ClubDetails></ClubDetails>            
          </Route>
          <Route path="/">
            <Header></Header>
            <Body></Body>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
