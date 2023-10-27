import React, { Component } from "react"
import './Calculator.css';
import ControlPanel from "../ControlPanel";
import Digits from "../Digits";
import Display from "../Display";
import History from "../History";
import Operators from "../Operators/index";
import ee from '../../eventEmitter'
import store from "../../store";
export class Calculator extends Component {
    constructor(props) {
        super(props);
        ee.addListener('displayUpdate', () => this.forceUpdate())
    }

    render() {
        return (
            <main className="react-calculator">
                <Display text={store.curExpression} />
                <ControlPanel />
                <Digits />
                <Operators />
                <History />
            </main>
        )
    }
}

export default Calculator;
