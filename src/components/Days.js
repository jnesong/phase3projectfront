import React, { useState } from "react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import NavBar from "./NavBar";
import History from "./History";
import cat from "./gifs/cat.gif";

function Days({ babies, baseURL }) {

    const [page, setPage] = useState("/");

    const listEachBabySleepHistory = babies.map((baby) => (
        <History
        key = {baby.id}
        baby = {baby}
        baseURL = {baseURL}
        />
    ));

    return (
        <div className="home">
            <img src={cat} alt="cat gif" />

            <NavBar onChangePage={setPage} />

            <p> History </p>
            {<br/>}
            {listEachBabySleepHistory}
           

        </div>
    );
}

export default Days;




 
    // plans for a line graph of total hours slept per day 
    // const data = [
    //     { day: '12/24/2021', hours: 16},
    //     { day: '12/25/2021', hours: 17},
    //     { day: '12/26/2021', hours: 16.4},
    //     { day: '12/27/2021', hours: 15},
    //     { day: '12/28/2021', hours: 15},

    // ];
    // const pastDays = (
    //         <LineChart width={900} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    //             <Line type="monotone" dataKey="hours" stroke="#8884d8" />
    //             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //             <XAxis dataKey="day" />
    //             <YAxis />
    //             <Tooltip />
    //         </LineChart>
    // );
    //and then a sentence that says the average hours/day slept for those days