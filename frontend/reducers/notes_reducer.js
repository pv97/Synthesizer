import {KEY_PRESSED, KEY_RELEASED} from "../actions/notes_actions"
import {NOTE_NAMES} from "../util/tones"

const notesReducer = (state = [], action)=>{
  Object.freeze(state);

  if (!NOTE_NAMES.includes(action.key)) {
    return state
  }

  switch(action.type){
    case KEY_PRESSED:
      return [...state,action.key];

    case KEY_RELEASED:
      let idx = state.indexOf(action.key);
      if (idx === -1){
        return state;
      }
      let new_notes = state.slice(0,idx).concat(state.slice(idx+1));
      return new_notes;

    case GROUP_UPDATE:
      return action.notes;

    default:
      return state;
  }

}

export default notesReducer;
