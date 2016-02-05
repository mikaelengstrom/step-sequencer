
export const toggleStepActive = (id) => {
    console.log(id);
    return {
        type: 'TOGGLE_STEP_ACTIVE',
        id
    }
}
