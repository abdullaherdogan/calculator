import React from "react";
import "./style.css";
import { useCalculator } from "../../context/CalculatorContext";
function Screen() {
    const { mainText, result, operatorChar } = useCalculator();

    return (
        <div className="screen">
            <div className="subtext">
                {result && operatorChar ? result + operatorChar : ""}
            </div>
            <div className="maintext">{mainText}</div>
        </div>
    );
}

export default Screen;
