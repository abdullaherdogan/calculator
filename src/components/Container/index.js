import React from "react";
import Bottom from "../Bottom";
import Header from "../Header";
import Screen from "../Screen";

function Container() {
    return (
        <div className="container">
            <Header />
            <Screen />
            <Bottom />
        </div>
    );
}

export default Container;
