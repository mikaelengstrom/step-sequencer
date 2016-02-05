require('../styles/blocks/step.scss');

import React from 'react';
import classNames from 'classnames';

let Step = ({
    selected,
    onButtonClick
}) => {
    let rootClasses = classNames(
        'step',
        {'step--selected': selected}
    );

    return (
        <div className={rootClasses}>
            <button className="step__button" onClick={onButtonClick}></button>
        </div>
    )
}

export default Step

