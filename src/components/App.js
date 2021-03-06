import Login from "./Login";
import Home from "./Home";
import Days from "./Days";
import Today from "./Today";
import AddSleep from "./AddSleep";
import { useHistory, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {

  const baseURL = "http://localhost:9292/";
  const history = useHistory();

  const [user, setUser] = useState({});
  const [babies, setBabies] = useState([]);

  function holdsUserLogin(userObj) {
    let username = userObj.user
    fetch(baseURL + username)
      .then(r => r.json())
      .then(data => setUser(data))
    history.push("/today")
  };
  // console.log(user)
  useEffect(() => {
    fetch(baseURL + user.username + "/babies")
      .then(r => r.json())
      .then(data => setBabies(data))
  }, [user]);


  return (
    <div>
      <Switch>

        <Route path="/login">
          <Login
            holdsUserLogin={holdsUserLogin}
          />
        </Route>

        <Route path="/days">
          <Days
            babies={babies}
            baseURL={baseURL}
          />
        </Route>

        <Route path="/today">
          <Today
            currentUser={user}
            babies={babies}
            baseURL={baseURL}
          />
        </Route>

        <Route path="/add">
          <AddSleep 
          baseURL={baseURL}
          babies={babies}
          />
        </Route>

        <Route exact path="/">
          <Login
            holdsUserLogin={holdsUserLogin}
          />
        </Route>

        <Route path="*">
          <h1>404 page not found 🥲</h1>
        </Route>

      </Switch>
    </div >
  );
}

export default App;
