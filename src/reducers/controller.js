export default function controller(state = {
    isPlaying: false,
    tempo: 120,
    currentTick: 0,
}, action){
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                isPlaying: true
            }

        case 'PAUSE':
            return {
                ...state,
                isPlaying: false
            }

        case 'NEXT_TICK':
            let nextTick = state.currentTick + 1;
            if (nextTick >= 16) {
                nextTick = 0;
            }

            return {
                ...state,
                currentTick: nextTick
            }

        default:
            return state;
    }
}