import Login from "./Login"

function App() {

  function holdsUserLogin(userObj) {
    console.log(userObj)
    let username = userObj.user
    fetch("http://localhost:9292/"+ username +"/babies")
      .then(r => r.json())
      .then(console.log)
  }



  return (
    <div>
      <Login
        holdsUserLogin={holdsUserLogin}
      />

    </div>
  );
}

export default App;
