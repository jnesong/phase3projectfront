import React, { useEffect, useState } from "react";

function TodayStatement({ baby, baseURL }) {

    const [lastSlept, setLastSlept] = useState({})

    useEffect(() => {
        fetch(baseURL + baby.name + "/lastslept")
            .then(r => r.json())
            .then(data => setLastSlept(data))
        }, [baby, baseURL])
        

        return (

            <p>It's been {lastSlept.hours} hours and {lastSlept.minutes} minutes since {baby.name} last slept. </p>

        )
    }

export default TodayStatement;