import React, { useEffect, useState } from "react";
import { Button } from 'semantic-ui-react';

function History({ baby, baseURL }) {

    const [sleepHistory, setSleepHistory] = useState([]);

    useEffect(fetchData, []);

    function fetchData() {
        fetch(baseURL + baby.name + "/sleephistory")
            .then(r => r.json())
            .then(data => setSleepHistory(data))
    };

    console.log(sleepHistory);
    // let listSleepHistory = sleepHistory.map(sleep => <li key={sleep.id}> On {sleep.woke} {baby.name} slept for {sleep.hours} hour(s) and {sleep.minutes} minute(s).</li>);
    function removal(clickedSleep) {

        const updatedSleepArray = sleepHistory.filter((sleep) => sleep.id !== clickedSleep.id)
        setSleepHistory(updatedSleepArray)

        fetch(baseURL + baby.name + `/sleephistory/${clickedSleep.id}`, { method: "DELETE" });

    }

    const listSleepHistory = sleepHistory.map(sleep => {
        function handleDeleteClick() {
            removal(sleep)
            console.log("clicked on: ", sleep)
        }

        return (<div key={sleep.id}>
            <p>
                On {sleep.woke} {baby.name} slept for {sleep.hours} hour(s) and {sleep.minutes} minute(s).
            </p>
            <Button className='delete-button' basic color='teal' content='Delete' onClick={handleDeleteClick} />
        </div>
        )
    })

    return (

        <>

            {<br />}
            {<br />}
            {baby.name}
            {listSleepHistory}

            {<br />}
            {<br />}
        </>

    )
}

export default History;