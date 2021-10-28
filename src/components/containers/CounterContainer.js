import React from "react";
import { connect } from 'react-redux';
import { decrease, increase } from "../../modules/counter";
import Counter from '../Counter'

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispathToProps = dispatch => ({
    increase: () => {
        dispatch(increase())
    },
    decrease: () => {
        dispatch(decrease())
    }
});

export default connect(
    mapStateToProps,
    mapDispathToProps,
)(CounterContainer);