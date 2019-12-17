import React from 'react';
import teoria from 'teoria';

import Pads from './Pads';

export default class Collection extends React.Component {

  render() {
    let chordsNames = window.location.href.split('/').pop().split('-');
    let chords = [];
    chordsNames.forEach(function (chordName) {
      let chord = teoria.chord(chordName);
      chords.push(chord);
    });
    return (
      <div>
        {Array.from(chords, (chord, index) =>
          <div className="list-group">
            <div className="list-group-item">
              <h3>{chord.name}</h3>
              <Pads key={index} currentChord={chord}></Pads>
            </div>
          </div>,
        )}
      </div>
    );
  }
}
