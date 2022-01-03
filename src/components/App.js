import Login from "./Login"
import Home from "./Home"
import Days from "./Days"
import Today from "./Today"
import AddSleep from "./AddSleep";
import { useHistory, Switch, Route } from "react-router-dom";
import React, {useState} from "react";

function App() {

  const baseURL = "http://localhost:9292/"
  const history = useHistory();

  const [user, setUser] = useState({})

  function holdsUserLogin(userObj) {
    let username = userObj.user
    fetch(baseURL + username)
      .then(r => r.json())
      .then(data => setUser(data))
    history.push("/today")
  }

  // console.log(user)


  return (
    <div>
      <Switch>

        <Route path="/login">
          <Login
            holdsUserLogin={holdsUserLogin}
          />
        </Route>

        <Route path="/days">
          <Days />
        </Route>

        <Route path="/today">
          <Today 
           currentUser = {user}
           baseURL = {baseURL}
           />
        </Route>

        <Route path="/add">
          <AddSleep/>
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
