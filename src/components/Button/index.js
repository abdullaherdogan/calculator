import React from "react";
import { useCalculator } from "../../context/CalculatorContext";
function Button({ char, number, other, operator }) {
    // variables from context
    const {
        mainText,
        setMainText,
        resetNextTime,
        setResetNextTime,
        result,
        setResult,
        operatorChar,
        setOperatorChar,
    } = useCalculator();
    const onClickHandler = (char, number, other, operator) => {
        const charToStr = char.name.toString();

        if (number) {
            //if number is Integer
            if (Number.isInteger(char.name)) {
                if (resetNextTime || Number(mainText) === 0) {
                    setMainText(charToStr);
                    setResetNextTime(false);
                } else {
                    setMainText(mainText + charToStr);
                }
                // if number is not number
            } else if (char.name === ".") {
                setMainText((prevState) => prevState + char.name);
            } else if (char.name === "+/-") {
                setMainText((prevState) => Number(prevState) * -1);
            }
        }
        if (other) {
            switch (char.name) {
                case "C":
                    setMainText(0);
                    setResult(0);
                    break;
                case "CE":
                    setMainText(0);
                    break;
                case "1/x":
                    setMainText(1 / mainText);
                    setResetNextTime(true);
                    break;
                case "x²":
                    setMainText(mainText * mainText);
                    setResetNextTime(true);
                    break;
                case "√":
                    setMainText(Math.sqrt(mainText));
                    setResetNextTime(true);
                    break;
                case "⇐":
                    // for delete from right main text
                    setMainText((prevText) =>
                        prevText.length > 0
                            ? Number(prevText.substr(0, prevText.length - 1))
                            : 0
                    );
                    break;
                default:
                    break;
            }
        }
        if (operator) {
            setResetNextTime(true);
            setOperatorChar(char.origin);
            switch (char.name) {
                case "=":
                    setMainText(
                        // eslint-disable-next-line no-eval
                        eval(Number(result) + operatorChar + Number(mainText))
                    );
                    setOperatorChar("");
                    setResult(Number(mainText));
                    break;
                default:
                    if (!result) {
                        setResult(Number(mainText));
                    } else if (result && Number(result) !== Number(mainText)) {
                        setMainText(
                            //eval for calculation process from text
                            // eslint-disable-next-line no-eval
                            eval(
                                Number(result) + operatorChar + Number(mainText)
                            )
                        );
                        setResult(
                            // eslint-disable-next-line no-eval
                            eval(
                                Number(result) + operatorChar + Number(mainText)
                            )
                        );
                    }
                    break;
            }
        }
    };
    return (
        <div
            onClick={() => onClickHandler(char, number, other, operator)}
            className={number ? "button number" : "button"}
        >
            {char.name}
        </div>
    );
}

export default Button;
