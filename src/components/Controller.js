import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PlayButton from './PlayButton'

import { play, pause } from '../actions/index'

let Controller = ({isPlaying, onClickPlay, onClickPause}) => (
    <div>
        <PlayButton isPlaying={isPlaying}
                    onClickPlay={onClickPlay}
                    onClickPause={onClickPause} />
    </div>
);

function mapStateToProps(state) {
    return {isPlaying: state.controller.isPlaying}
}

function mapDispatchToProps(dispatch) {
    return {
        onClickPlay: bindActionCreators(play, dispatch),
        onClickPause: bindActionCreators(pause, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
