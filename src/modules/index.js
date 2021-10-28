import { combineReducer } from 'redux';
import counter from './counter';

const rootReducer = combineReducer({
    counter,
})

export default rootReducer;