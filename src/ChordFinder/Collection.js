import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import teoria from 'teoria';
import Clipboard from 'react-clipboard.js';

import Pads from './Pads';

export default class Collection extends React.Component {
  render() {
    let chords = [];
    try {
      let urlParts = window.location.href.split('/');
      let chordsNames = urlParts.pop().split('-');
      var numberOfPads = parseInt(urlParts.pop());
      chordsNames.forEach(function (chordName) {
        let chord = teoria.chord(chordName);
        chords.push(chord);
      });
    } catch (e) {
      return <Redirect to={'/'} />;
    }
    return (
      <div className="collection">
        <div className="row actions">
          <div className="col col-12">
            <h2>MPC-Chords</h2>
            <Link to={'/'}>
              <button className="btn btn-block text-left back">
                Back to the Chord-Finder-App
              </button>
            </Link>
            <Clipboard
              data-clipboard-text={window.location.href}
              className="btn btn-block text-left"
              component="button">
              Copy collection-URL to clipboard
            </Clipboard>
          </div>
        </div>
        {Array.from(chords, (chord, index) =>
          <div key={index}>
            <div className="row">
              <div className="col col-12">
                <h3>{chord.name}</h3>
              </div>
            </div>
            <Pads
              key={index}
              currentChord={chord}
              numberOfPads={numberOfPads}
            ></Pads>
          </div>,
        )}
      </div>
    );
  }
}
