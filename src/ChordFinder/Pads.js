import React from 'react';
import teoria from 'teoria';

export default class Pads extends React.Component {
  render() {
    const numberOfPads = this.props.numberOfPads;
    const currentChord = this.props.currentChord;
    const pads = [];
    let notes = teoria.scale('c', 'chromatic').notes();
    for (let i = 0; i < 16; i++) {
      let a = i % 12;
      let note = notes[a];

      let activeClass = '';
      let name = '';
      currentChord.notes().forEach(function (noteOfCurrentChord) {
        if (note.chroma() === noteOfCurrentChord.chroma()) {
          activeClass = 'active';
          name = noteOfCurrentChord.name() + noteOfCurrentChord.accidental();
        }
      });
      pads.push({
        name: name,
        chroma: note.chroma(),
        activeClass: activeClass,
      });
      if (12 === numberOfPads && 0 === (i + 1) % 3) {
        pads.push({});
      }
      if (16 === pads.length) {
        break;
      }
    }
    let sortedPads = [
      pads[12], pads[13], pads[14], pads[15],
      pads[8], pads[9], pads[10], pads[11],
      pads[4], pads[5], pads[6], pads[7],
      pads[0], pads[1], pads[2], pads[3],
    ];

    return (
      <div className={'row pads pads-' + numberOfPads}>
        {Array.from(sortedPads, (pad, index) =>
          <div className={'col col-3 pad-container'} key={index}>
            <div className="embed-responsive embed-responsive-1by1 text-center">
              <div className={'embed-responsive-item pad ' + pad.activeClass}>
                <span className="pad-name align-middle">
                  {pad.name}
                </span>
              </div>
            </div>
          </div>,
        )}
      </div>
    );
  }
}
