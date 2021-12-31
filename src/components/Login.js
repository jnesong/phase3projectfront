import star from "./star.gif"
import React, { useState } from "react";

function Login({holdsUserLogin}) {

    const [username, setUsername] = useState ("enter username")

    function handleSubmit (e){
        e.preventDefault()
        const userObj = {user: username}
        holdsUserLogin(userObj)
    }

    return (
        <>
            <h2> Mama Data </h2>
            <img className="image-cropper" src={star} alt="star gif" />
            <form onSubmit={handleSubmit}>
                <div style={{ alignItems: "center" }}>
                    <input
                        className="input"
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <button id="buttonSubmit" type="submit"> login </button>
                </div>

            </form>
        </>
    );
}

export default Login;