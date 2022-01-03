import NavBar from "./NavBar"
import moonstar from "./gifs/moonstar.gif"
import TodayStatement from "./TodayStatement"
import React, { useEffect, useState } from "react";

function Today({ currentUser, baseURL }) {

    const [page, setPage] = useState("/today")
    const [babies, setBabies] = useState([])

    useEffect(() => {
        fetch(baseURL + currentUser.username + "/babies")
            .then(r => r.json())
            .then(data => setBabies(data))
    }, [currentUser, baseURL])

    console.log(currentUser)
    console.log(babies)

    const listLastSlept = babies.map((baby) => (
            <TodayStatement
                key = {baby.id}
                baby = {baby}
                baseURL = {baseURL}
            />))

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