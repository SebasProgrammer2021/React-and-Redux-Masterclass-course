import React from "react";
import store from '../../store';
import Button from '../Button';
import { updateExpression } from "../../actions/expression";

export const Operators = () => {
    return (
        <section className="buttons--operators">
            {["+", "-", "*", "/"]
                .map((op, i) => (
                    <Button key={i} text={op} clickHandler={operatorsHandler} />)
                )}
            <Button text="=" clickHandler={calculateExpression} />
        </section>
    )
}

export const operatorsHandler = (type) => updateExpression(`${store.getState().curExpression} ${type} `);

export const calculateExpression = () => {
    /* eslint-disable */
    // This rule is important in production apps!
    // Read more: https://eslint.org/docs/rules/no-eval
    // To simplify the functionality in this course we use eval
    const calcFunc = eval;
    /* eslint-enable */
    try {
        store.newExpression = calcFunc(store.curExpression);
    } catch (e) {
        console.error("Error: Incorrect Expression of digits & operators :(")
    }
}


export default Operators;