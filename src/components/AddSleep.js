import NavBar from "./NavBar";
import stitch from "./gifs/stitch2.gif";
import React, { useState } from "react";
import dayjs from 'dayjs';

function AddSleep({baseURL, babies}) {
    const [page, setPage] = useState("/today");
    const [nameInput, setNameInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [timeInput, setTimeInput] = useState("");
    const [hourInput, setHourInput] = useState(0);
    const [minInput, setMinInput] = useState(0);

    function handleAddSubmit(e) {
        e.preventDefault()
        let theBaby = babies.find(baby => baby.name === nameInput)
        let theDate = dayjs(dateInput).format('MMMM D, YYYY ')
        console.log(theDate)
        let inputObj ={
            woke: theDate + timeInput,
            hour: hourInput,
            min: minInput,
            baby_id: theBaby.id
        }
        console.log(inputObj)

        fetch(baseURL + "sleeps", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputObj),
        })
        .then(r => r.json())
        .then(console.log);
    };


    return (
        <div className="home">
            <img className="image-cropper" src={stitch} alt="stitch gif" />
            <NavBar onChangePage={setPage} />

            {<br/>}

            <form onSubmit={handleAddSubmit}>

                <label> baby name: </label>
                <input 
                className = "inputform"
                type = "text"
                placeholder = "baby name"
                name = "baby name"
                onChange={e => setNameInput(e.target.value)}
                value = {nameInput}
                />
                {<br/>}
                {<br/>}

                <label> date: </label>
                <input 
                className = "inputform"
                type = "date"
                name = "date"
                onChange={e => setDateInput(e.target.value)}
                value = {dateInput}
                />
                {<br/>}
                {<br/>}

                <label> woke up at: </label>
                <input 
                className = "inputform"
                type = "time"
                name = "time"
                onChange={e => setTimeInput(e.target.value)}
                value = {timeInput}
                />
                {<br/>}
                {<br/>}

                <label> sleep length: </label>
                <input 
                 onKeyPress={(event) => {
                    if (!/[0-9]|\./.test(event.key) || //the key pressed is not the key for 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, or “.” OR
                    (/\./.test(event.key) && hourInput.includes("."))) //it is a “.” AND the input value already includes a “.”
                    {event.preventDefault();}}
                  }
                className = "inputlength"
                type = "text"
                placeholder = "hour(s)"
                name = "hours"
                onChange={e => setHourInput(e.target.value)}
                value = {hourInput}
                />
                <label> hr(s) </label>
                <input 
                 onKeyPress={(event) => {
                    if (!/[0-9]|\./.test(event.key) || //the key pressed is not the key for 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, or “.” OR
                    (/\./.test(event.key) && minInput.includes("."))) //it is a “.” AND the input value already includes a “.”
                    {event.preventDefault();}}
                  }
                className = "inputlength"
                type = "text"
                placeholder = "min(s)"
                name = "minutes"
                onChange={e => setMinInput(e.target.value)}
                value = {minInput}
                />
                <label> min(s) </label>
                {<br/>}
                {<br/>}
        
                <button id="buttonSubmit2" type="submit"> submit </button>


            </form>


        </div>
    )

}

export default AddSleep