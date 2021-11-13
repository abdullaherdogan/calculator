import "./App.css";
import Container from "./components/Container";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
    return (
        <div className="App">
            <CalculatorProvider>
                <Container />
            </CalculatorProvider>
        </div>
    );
}

export default App;
