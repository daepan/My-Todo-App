import React from "react";
import { decrease, increase } from "../../modules/counter";
import { connect } from 'react-redux';
import Counter from "../Counter";


const CounterContainer = ({ number, increase, decrease }) => {

    return (
        <Counter
            number={number}
            onIncrease={increase}
            onDecrease={decrease}
        />
    )
}



export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase,
        decrease,
    }
)(CounterContainer)