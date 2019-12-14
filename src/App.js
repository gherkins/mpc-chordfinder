import React from 'react';
import teoria from 'teoria';
import './App.css';

class PadSelect extends React.Component {
  render() {
    return (
      <select
        className="form-control"
        onChange={this.props.changeNumberOfPads}>
        <option value="16">16 pads</option>
        <option value="12">12 pads</option>
      </select>
    );
  }
}

class NoteSelect extends React.Component {
  render() {
    return (
      <select
        className="form-control"
        onChange={this.props.changeRootNote}>
        <option value="C" className="active">C</option>
        <option value="C#">C# (Db)</option>
        <option value="D">D</option>
        <option value="D#">D# (Eb)</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#">F# (Gb)</option>
        <option value="G">G</option>
        <option value="G#">G# (Ab)</option>
        <option value="A">A</option>
        <option value="A#">A# (Bb)</option>
        <option value="B">B</option>
      </select>
    );
  }
}

class ChordTypeSelect extends React.Component {
  render() {
    return (
      <select
        className="form-control"
        onChange={this.props.changeChordType}>
        <option value="">maj</option>
        <option value="maj7">maj7</option>
        <option value="maj7b5">maj7b5</option>
        <option value="maj7#5">maj7#5</option>
        <option value="min">min</option>
        <option value="min7">min7</option>
        <option value="min7b5">min7b5</option>
        <option value="min7#5">min7#5</option>
        <option value="min6">min6</option>
        <option value="mmaj7">mmaj7</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="7b5">7b5</option>
        <option value="7#5">7#5</option>
        <option value="7sus4">7sus4</option>
        <option value="aug">aug</option>
        <option value="dim">dim</option>
        <option value="dim7">dim7</option>
        <option value="5">5</option>
        <option value="sus2">sus2</option>
        <option value="sus4">sus4</option>
        <option value="sus2sus4">sus2sus4</option>
      </select>
    );
  }
}

class Pads extends React.Component {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPads: 16,
      rootNote: 'C',
      chordType: '',
    };
    this.changeNumberOfPads = this.changeNumberOfPads.bind(this);
    this.changeRootNote = this.changeRootNote.bind(this);
    this.changeChordType = this.changeChordType.bind(this);
  }

  changeNumberOfPads(e) {
    this.setState({ numberOfPads: parseInt(e.target.value) });
  }

  changeRootNote(e) {
    this.setState({ rootNote: e.target.value });
  }

  changeChordType(e) {
    this.setState({ chordType: e.target.value });
  }

  render() {
    const currentChord = teoria.chord(this.state.rootNote + this.state.chordType);
    const numberOfPads = this.state.numberOfPads;
    return (
      <div className="App">
        <div className="row">
          <div className="col col-12">
            <PadSelect changeNumberOfPads={this.changeNumberOfPads} />
            <NoteSelect changeRootNote={this.changeRootNote} />
            <ChordTypeSelect changeChordType={this.changeChordType} />
          </div>
        </div>
        <Pads numberOfPads={numberOfPads} currentChord={currentChord}></Pads>
      </div>
    );
  }
}

export default App;
