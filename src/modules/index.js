import { combineReducer } from 'redux';
import counter from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducer({
    counter,
    sample,
    loading,
})

export default rootReducer;