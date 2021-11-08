import { createAction, handleActions } from 'redux-actions';


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초 뒤에 increase 혹은 dexrease 함수를 디스패치함
export const increaseAsync = () => disppatch => {
    setTimeout(() => {
        disppatch(increase())
    }, 1000)
}

export const decreaseAsync = () => disppatch => {
    setTimeout(() => {
        disppatch(decrease())
    }, 1000)
}

const intialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    intialState
)

export default counter;