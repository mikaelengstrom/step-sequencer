export const decreaseTempo = (tempo) => {
    return {
        type: 'TEMPO_DECREASE',
    }
}

export const increaseTempo = (tempo) => {
    return {
        type: 'TEMPO_INCREASE',
    }
}

export const decreaseDetune = (id, detune) => {
    return {
        type: 'STEP_DETUNE_DECREASE',
        id,
        detune
    }
}

export const increaseDetune = (id, detune) => {
    return {
        type: 'STEP_DETUNE_INCREASE',
        id,
        detune
    }
}

export const decreaseFrequency = (id, frequency) => {
    return {
        type: 'STEP_FREQUENCY_DECREASE',
        id,
        frequency
    }
}

export const increaseFrequency = (id, frequency) => {
    return {
        type: 'STEP_FREQUENCY_INCREASE',
        id,
        frequency
    }
}

export const toggleStepActive = (id) => {
    return {
        type: 'TOGGLE_STEP_ACTIVE',
        id
    }
}

export const play = () => {
    return {
        type: 'PLAY'
    }
}

export const pause = () => {
    return {
        type: 'PAUSE'
    }
}

export const nextTick = () => {
    return {
        type: 'NEXT_TICK'
    }
}

