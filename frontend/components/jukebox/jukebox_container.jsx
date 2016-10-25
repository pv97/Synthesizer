import React from 'react'
import {connect} from 'react-redux'
import {startPlaying, stopPlaying} from "../../actions/playing_actions"
import {groupUpdate} from "../../actions/notes_actions"
import Jukebox from './jukebox'


const mapStateToProps = state=>({
  tracks: state.tracks,
  isRecording: state.isRecording
  isPlaying: state.isPlaying
})

const mapDispatchToProps = dispatch => ({
  onPlay : track => e => {
    const playBackSTartTime = Date.now()
    const currNote = 0
    const timeElapsed = 0
    const interval = setInterval(
      () => {
        if (currNote < track.roll.length){
          if (Date.now() - playBackStartTime > track.roll[currNote].timeSlice){
            dispatch
          }
        }
      }
      ,1000
    )
    dispatch(startPlaying)
    dispatch(stopPlaying)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox)
