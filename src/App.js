import React from 'react';
import teoria from 'teoria';
import PadSelect from './ChordFinder/PadSelect';
import NoteSelect from './ChordFinder/NoteSelect';
import ChordTypeSelect from './ChordFinder/ChordTypeSelect';
import Pads from './ChordFinder/Pads';
import Collection from './ChordFinder/Collection';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPads: 16,
      rootNote: 'C',
      chordType: '',
      collection: [],
    };
    this.changeNumberOfPads = this.changeNumberOfPads.bind(this);
    this.changeRootNote = this.changeRootNote.bind(this);
    this.changeChordType = this.changeChordType.bind(this);
    this.addChordToCollection = this.addChordToCollection.bind(this);
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

  addChordToCollection() {
    let currentChord = teoria.chord(this.state.rootNote + this.state.chordType);
    this.state.collection.push(currentChord);
    this.setState({ collection: this.state.collection });
  }

  render() {
    const currentChord = teoria.chord(this.state.rootNote + this.state.chordType);
    const numberOfPads = this.state.numberOfPads;
    const collection = this.state.collection;
    return (
      <div className="App">
        <div className="row">
          <div className="col col-12">
            <PadSelect changeNumberOfPads={this.changeNumberOfPads} />
            <NoteSelect changeRootNote={this.changeRootNote} />
            <ChordTypeSelect changeChordType={this.changeChordType} />
          </div>
        </div>
        <Pads
          numberOfPads={numberOfPads}
          currentChord={currentChord}>
        </Pads>
        <Collection
          addChordToCollection={this.addChordToCollection}
          currentChord={currentChord}
          collection={collection}>
        </Collection>
      </div>
    );
  }
}

export default App;
