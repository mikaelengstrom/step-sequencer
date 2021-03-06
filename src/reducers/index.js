import { combineReducers } from 'redux'

import steps from './steps'

import controller from './controller'

let reducer = combineReducers({
    steps,
    controller
});

export default reducer;
