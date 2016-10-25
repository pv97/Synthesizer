import {ADD_NOTES, START_RECORDING, STOP_RECORDING} from '../actions/tracks_actions'
import merge from 'lodash/merge';

var currTrackId = 0
var new_roll
var timeSlice
var new_state

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case START_RECORDING:
      currTrackId++;
      let track = {[currTrackId]:{
        id: currTrackId,
        name: "jimmy",
        roll: [],
        timeStart: Date.now()
      }};
      return merge({},state,track)

    case STOP_RECORDING:
      new_roll = state[currTrackId].roll.slice(0);
      timeSlice = action.timeNow - state[currTrackId].timeStart
      new_roll.push({notes: [], timeSlice: timeSlice });
      new_state = merge({}, state);
      new_state[currTrackId].roll = new_roll;
      return new_state;

    case ADD_NOTES:
    window.state = state
      new_roll = state[currTrackId].roll.slice(0);
      timeSlice = action.timeNow - state[currTrackId].timeStart
      new_roll.push({notes: action.notes, timeSlice: timeSlice });
      new_state = merge({}, state);
      new_state[currTrackId].roll = new_roll;
      return new_state;

    default:
      return state
  }
}

export default tracksReducer;
