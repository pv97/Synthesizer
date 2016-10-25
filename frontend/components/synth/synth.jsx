 import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key'

class Synth extends React.Component {
  constructor(props){
    super(props);
    this.notes = [];
    for (var i = 0; i < NOTE_NAMES.length; i++) {
      this.notes.push(new Note(TONES[NOTE_NAMES[i]]));
    }
  }

  onKeyDown(e){
    this.props.keyPressed(e.key);
    if (this.props.isRecording){
      this.props.addNotes(this.props.notes)
    }
  }

  onKeyUp(e){
    this.props.keyReleased(e.key);
    if (this.props.isRecording){
      this.props.addNotes(this.props.notes)
    }
  }

  componentDidMount(){
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes(){
    for (var i = 0; i < NOTE_NAMES.length; i++) {
      if(this.props.notes.includes(NOTE_NAMES[i])){
        this.notes[i].start();
      } else {
        this.notes[i].stop();
      }
    }
  }

  render() {
    this.playNotes();
    return (
      <ul>
        <NoteKey note = {NOTE_NAMES} pressed = {this.props.notes}/>
      </ul>
    )
  }
}


export default Synth;
