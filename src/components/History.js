import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react';

function History({ baby, baseURL }) {

    const [sleepHistory, setSleepHistory] = useState({});

    useEffect(() => {
        fetch(baseURL + baby.name + "/sleephistory")
            .then(r => r.json())
            .then(data => setSleepHistory(data))
        }, [baby, baseURL]);

        console.log(sleepHistory);

        // let listSleepHistory = sleepHistory.map((eachSleep) => {
        // <li>
        //     {eachSleep.woke}
        // </li>});

        return (

            <>
            </>

        )
    }

export default History;