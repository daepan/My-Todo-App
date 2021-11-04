import { combineReducer } from 'redux';
import counter from './counter';
import sample from './sample';

const rootReducer = combineReducer({
    counter,
    sample,

})

export default rootReducer;