import React, { useEffect, useState } from "react";

function TodayStatement({ baby, baseURL }) {

    const [lastSlept, setLastSlept] = useState({});

    useEffect(() => {
        fetch(baseURL + baby.name + "/lastslept")
            .then(r => r.json())
            .then(data => setLastSlept(data))
        }, [baby, baseURL]);

        // let timeSinceLastSlept = instead of the time the baby woke up, 
        //would like to subtract current time from that time. 
        let timeSinceLastSlept = lastSlept.woke;
        

        return (

            <p>It's been {timeSinceLastSlept} since {baby.name} last slept. </p>

        )
    }

export default TodayStatement;