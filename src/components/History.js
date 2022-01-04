import React, { useEffect, useState } from "react";
import { Button, List, Icon } from 'semantic-ui-react';

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
        function removal (clickedSleep) {

            const updatedSleepArray = sleepHistory.filter((sleep) => sleep.id !== clickedSleep.id)
            setSleepHistory(updatedSleepArray)

            fetch(baseURL + baby.name + `/sleephistory/${clickedSleep.id}`, { method: "DELETE" });

        }

        const listSleepHistory = sleepHistory.map(sleep => {
            function handleDeleteClick (){
                removal(sleep)
                console.log("clicked on: ", sleep)
            }

            return (
            <List.Item>
              On {sleep.woke} {baby.name} slept for {sleep.hours} hour(s) and {sleep.minutes} minute(s).
              <List.Content floated='right'>
                <Button onClick={handleDeleteClick}> 
                    Delete 
                </Button>
              </List.Content>
            </List.Item>
            )
        })

        return (

            <>
            {<br/>}
            {<br/>}
            <List divided verticalAlign='middle'>
                {listSleepHistory}
            </List>
            {<br/>}
            {<br/>}
            </>

        )
    }

    export default History;