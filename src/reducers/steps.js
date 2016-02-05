import React from 'react';

let step = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_STEP_ACTIVE':
            if (state.id != action.id) {
                return state
            }

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
            return {id, selected: false};
        });
    }

    switch (action.type) {
        case 'TOGGLE_STEP_ACTIVE':
            return state.map(s => step(s, action));
            break;
        default:
            return state;
    }
}

export default steps
