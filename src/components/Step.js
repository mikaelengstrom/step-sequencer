require('../styles/blocks/step.scss');

import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {
    increaseDetune,
    decreaseDetune,
    increaseFrequency,
    decreaseFrequency,
} from '../actions/index';

let Step = ({
    id,
    selected,
    active,
    frequency,
    detune,
    onButtonClick,
    dispatch,
}) => {
    let rootClasses = classNames(
        'step',
        {
            'step--active': active,
            'step--selected': selected
        }
    );

    return (
        <div className="step-container">
            <div className={rootClasses}>
                <button className="step__button" onClick={onButtonClick}></button>
            </div>

            <div className="freq">
                <button onClick={() => dispatch(decreaseFrequency(id, frequency))}> - </button>
                f: {frequency}
                <button onClick={() => dispatch(increaseFrequency(id, frequency))}> + </button>
            </div>

            <div className="detune">
                <button onClick={() => dispatch(decreaseDetune(id, detune))}> - </button>
                dt: {detune}
                <button onClick={() => dispatch(increaseDetune(id, detune))}> + </button>
            </div>
        </div>
    )
}

export default connect()(Step)

