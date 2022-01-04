import React, { useState } from "react";
import NavBar from "./NavBar";

function Home() {
    const [page, setPage] = useState("/today");


    return (
        <div className="home">
            <NavBar onChangePage={setPage} />

        </div>
    );
}

export default Home;