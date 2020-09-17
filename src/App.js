import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PlaceBook from './Components/PlaceBook/PlaceBook';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Rooms from './Components/Rooms/Rooms';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="container" >
      {/* <h1 style={{textAlign:"center",color:"white"}}>Welcome{loggedInUser.name}</h1> */}
      
      <Router>
      
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/place/:placeName/:placeDetails">
            <PlaceBook></PlaceBook>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/book/:placeName">
            <Rooms></Rooms>
          </PrivateRoute>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>       
        </Switch>
      </Router>
      

     
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
