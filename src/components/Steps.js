require('../styles/blocks/steps.scss');

import React, { PropTypes } from 'react';
import Step from './Step';
import {connect} from 'react-redux';
import {toggleStepActive, frequencyChange} from '../actions/index'


const Steps = ({
    steps,
    onStepButtonClick,
    isPlaying,
    currentTick,
    dispatch
}) => (
    <div className="steps">
        {
            steps.map((step) => {
                return (
                    <Step key={step.id}
                          active={step.id == currentTick && isPlaying}
                          onButtonClick={() => dispatch(toggleStepActive(step.id))}
                          {...step} />)
            })
        }
    </div>
);

function mapStateToProps(state) {
    return {
        steps: state.steps,
        currentTick: state.controller.currentTick,
        isPlaying: state.controller.isPlaying,
    }
}

export default connect(mapStateToProps)(Steps);
