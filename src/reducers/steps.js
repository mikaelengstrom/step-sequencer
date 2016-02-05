import React from 'react';

let step = (state = [], action) => {
    if (state.id != action.id) {
        return state
    }
    switch (action.type) {
        case 'STEP_DETUNE_DECREASE':
            return {
                ...state,
                detune: state.detune - 10
            }

        case 'STEP_DETUNE_INCREASE':
            return {
                ...state,
                detune: state.detune + 10
            }

        case 'STEP_FREQUENCY_DECREASE':
            return {
                ...state,
                frequency: state.frequency - 100
            }

        case 'STEP_FREQUENCY_INCREASE':
            return {
                ...state,
                frequency: state.frequency + 100
            }

        case 'TOGGLE_STEP_ACTIVE':
            return {
                ...state,
                selected: !state.selected
            }
        default:
            return state;
    }
}

const steps = (state = false, action) => {
    if (!state) {
        return Array(16).fill().map((_, id) => {
            return {
                id,
                selected: false,
                frequency: Math.floor(Math.random() * 2000 + 1),
                detune: Math.floor(Math.random() * 100 + 1)
            };
        });
    }

    switch (action.type) {
        case 'STEP_FREQUENCY_DECREASE':
        case 'STEP_FREQUENCY_INCREASE':
        case 'TOGGLE_STEP_ACTIVE':
            return state.map(s => step(s, action));
            break;
        default:
            return state;
    }
}

export default steps
