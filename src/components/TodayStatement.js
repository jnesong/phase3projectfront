import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';


function TodayStatement({ baby, baseURL }) {

    const [lastSlept, setLastSlept] = useState({});

    useEffect(() => {
        fetch(baseURL + baby.name + "/lastslept")
            .then(r => r.json())
            .then(data => setLastSlept(data))
        }, [baby, baseURL]);

        // let timeSinceLastSlept = instead of the time the baby woke up, 
        //would like to subtract current time from that time. 
        let hrSinceLastSlept = dayjs(lastSlept.woke).get('h');
        let minSinceLastSlept = dayjs(lastSlept.woke).get('m');
        

        return (

            <p>{baby.name} last sleep at: {hrSinceLastSlept}:{minSinceLastSlept}</p>

        )
    }

export default TodayStatement;