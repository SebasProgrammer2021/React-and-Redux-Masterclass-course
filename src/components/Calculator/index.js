import React from "react"
import './Calculator.css';
import ControlPanel from "../ControlPanel";
import Digits from "../Digits";
import Display from "../Display";
import History from "../History";
import Operators from "../Operators";

export class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;
