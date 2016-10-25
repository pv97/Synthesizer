import React from 'react'

const NoteKey = ({note, pressed}) => (
  <ul>
    {
      note.map((el) => {
        if (pressed.includes(el)){
          return <li key={el} className="pressed">{el}</li>
        } else {
          return <li key={el}>{el}</li>
        }
      })
    }
  </ul>
)

// const Synth = () => (
//   <div>Synth</div>
// )
export default NoteKey;
