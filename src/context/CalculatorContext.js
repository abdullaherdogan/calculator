import { createContext, useContext, useState } from "react";
const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    // necessary variables
    const [mainText, setMainText] = useState(0);
    const [operatorChar, setOperatorChar] = useState("");
    const [resetNextTime, setResetNextTime] = useState(true);
    const [result, setResult] = useState(0);
    // character list for calculator buttons
    const charList = {
        others: [
            { name: "%" },
            { name: "CE" },
            { name: "C" },
            { name: "⇐" },
            { name: "1/x" },
            { name: "x²" },
            { name: "√" },
        ],
        numbers: [
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: "+/-" },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 0 },
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: "." },
        ],
        operators: [
            { name: "/", origin: "/" },
            { name: "X", origin: "*" },
            { name: "-", origin: "-" },
            { name: "+", origin: "+" },
            { name: "=", origin: "=" },
        ],
    };
    // values ​​to be transferred
    const values = {
        charList,
        mainText,
        setMainText,
        result,
        setResult,
        operatorChar,
        setOperatorChar,
        resetNextTime,
        setResetNextTime,
    };
    return (
        <CalculatorContext.Provider value={values}>
            {children}
        </CalculatorContext.Provider>
    );
};
// export function for useContext
export const useCalculator = () => useContext(CalculatorContext);
