require('./styles/all.scss');

import React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { nextTick } from './actions/index'

import App from './components/App'

import { NoiseMachine} from './helpers/NoiseMachine'

let store = createStore(reducer);


// Noise machine //
let noiseMachine = new NoiseMachine(store);

noiseMachine.doSomeNoise();

// Timer //
let timer = false;
function startTimer() {
    timer = setInterval(function() {
        store.dispatch(nextTick());
    }, 80)
}
function stopTimer() {
    clearInterval(timer);
    timer = false;
}


// Subscriptions //
store.subscribe( (state) => {
    state = store.getState();
    if (state.controller.isPlaying && !timer ) {
        startTimer();
    } else if (!state.controller.isPlaying && timer) {
        stopTimer();
    }
});

store.dispatch(nextTick());

// Rendering //
render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root')
);