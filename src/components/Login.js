import React, { useState } from "react";
import star from "./gifs/star.gif";

function Login({holdsUserLogin}) {

    const [username, setUsername] = useState ("");

    function handleSubmit (e){
        e.preventDefault()
        const userObj = {user: username}
        holdsUserLogin(userObj)
    };

    return (
        <div className="login">
            <h2> Mama Data </h2>
            <img className="image-cropper" src={star} alt="star gif"/>
            <form onSubmit={handleSubmit}>
                <div style={{ alignItems: "center" }}>
                    <input
                        className="inputlogin"
                        type="text"
                        placeholder="enter username"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button id="buttonSubmit" type="submit"> login </button>
                </div>

            </form>
        </div>
    );
}

export default Login;