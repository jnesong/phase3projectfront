import NavBar from "./NavBar";
import moonstar from "./gifs/moonstar.gif";
import TodayStatement from "./TodayStatement";
import React, { useState } from "react";

function Today({ babies, currentUser, baseURL }) {

    const [page, setPage] = useState("/today");
  

    console.log(currentUser);
    console.log(babies);

    const listLastSlept = babies.map((baby) => (
            <TodayStatement
                key = {baby.id}
                baby = {baby}
                baseURL = {baseURL}
            />));

    return (
        <div className="home">
            <img className="image-cropper" src={moonstar} alt="moon gif" />
            <NavBar onChangePage={setPage} />

            <h2>Hi {currentUser.displayname}</h2>
            
            {listLastSlept}

        </div>
    );
}

export default Today;