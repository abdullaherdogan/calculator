import React from "react";
import Button from "../Button";
import "./style.css";
import { useCalculator } from "../../context/CalculatorContext";
function Bottom() {
    const { charList } = useCalculator();
    return (
        // maps from charlist
        <div className="bottom">
            {charList.others.map((char, index) => {
                return (
                    <Button key={index} char={char} className="other" other />
                );
            })}
            {charList.operators.map((char, index) => {
                return (
                    <Button
                        key={index}
                        char={char}
                        className="operator"
                        operator
                    />
                );
            })}
            {charList.numbers.map((char, index) => {
                return (
                    <Button key={index} char={char} className="number" number />
                );
            })}
        </div>
    );
}

export default Bottom;
