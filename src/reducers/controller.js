export default function controller(state = {
    isPlaying: false,
    tempo: 120,
    currentTick: 0,
}, action){
    console.log(action);
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

        case 'TEMPO_DECREASE':
            return {
                ...state,
                tempo: state.tempo - 2
            }

        case 'TEMPO_INCREASE':
            return {
                ...state,
                tempo: state.tempo + 2
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