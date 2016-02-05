import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PlayButton from './PlayButton'

import { play, pause, increaseTempo, decreaseTempo } from '../actions/index'

let Controller = ({isPlaying, onClickPlay, onClickPause, dispatch, tempo}) => (
    <div>
        <PlayButton isPlaying={isPlaying}
                    onClickPlay={onClickPlay}
                    onClickPause={onClickPause} />

        <button onClick={() => dispatch(decreaseTempo())}> - </button>
        Tempo: {tempo}
        <button onClick={() => dispatch(increaseTempo())}> + </button>
    </div>
);

function mapStateToProps(state) {
    return {...state.controller}
}

function mapDispatchToProps(dispatch) {
    return {
        onClickPlay: bindActionCreators(play, dispatch),
        onClickPause: bindActionCreators(pause, dispatch),
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
