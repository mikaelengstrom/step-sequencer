require('../styles/blocks/steps.scss');

import React, { PropTypes } from 'react';
import Step from './Step';
import {connect} from 'react-redux';
import {toggleStepActive} from '../actions/index'


let Steps = ({steps, onStepButtonClick, dispatch}) => (
    <div>
        {
            steps.map((step) => (<Step key={step.id}
                                       onButtonClick={() => dispatch(toggleStepActive(step.id))}
                                       {...step} />)
            )
        }
    </div>
);

function mapStateToProps(state) {
    return {steps: state.steps}
}

export default connect(mapStateToProps)(Steps);
