require('../styles/blocks/play-button.scss');

import React from 'react';
import classNames from 'classnames';

let PlayButton = ({isPlaying, onClickPlay, onClickPause}) => {
    let rootClassNames = classNames('play-button', {
        'play-button--play': isPlaying,
        'play-button--pause': !isPlaying
    });

    let play = (
        <button className='play-button__button play-button__button--play'
                onClick={onClickPlay}> |&gt; </button>
    );

    let pause = (
        <button className='play-button__button play-button__button--pause'
                onClick={onClickPause}> || </button>
    );

    return (
        <div className={rootClassNames}>
            {isPlaying ? pause : play}
            hej
        </div>
    )
}

export default PlayButton
