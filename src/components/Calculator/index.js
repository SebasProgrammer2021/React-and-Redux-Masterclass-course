import React, { Component } from "react"
import './Calculator.css';
import ControlPanel from "../ControlPanel";
import Digits from "../Digits";
import Display from "../Display";
import History from "../History";
import Operators from "../Operators/index";
import store from "../../store";

class Calculator extends Component {
    render() {
        return (
            <main className="react-calculator">
                <Display text={store.getState().curExpression} />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;
