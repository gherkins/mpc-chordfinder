import React from 'react';
import { Route, Switch, BrowserRouter, Link, generatePath } from 'react-router-dom';

import teoria from 'teoria';

import PadSelect from './ChordFinder/PadSelect';
import NoteSelect from './ChordFinder/NoteSelect';
import ChordTypeSelect from './ChordFinder/ChordTypeSelect';
import Pads from './ChordFinder/Pads';
import CollectionActions from './ChordFinder/CollectionActions';
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
    this.clearChordCollection = this.clearChordCollection.bind(this);
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
    this.state.collection.push(this.state.rootNote + this.state.chordType);
    this.setState({ collection: this.state.collection });
  }

  clearChordCollection() {
    this.setState({ collection: [] });
  }

  render() {
    const currentChord = teoria.chord(this.state.rootNote + this.state.chordType);
    const numberOfPads = this.state.numberOfPads;
    const collection = this.state.collection;
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/collection/:chords'} exact component={Collection} />
          <Route path={'/'} exact>
            <div className="App">
              <div className="row">
                <div className="col col-12">
                  <h2>MPC-Chord-Finder</h2>
                </div>
              </div>
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
              <p></p>
              <CollectionActions
                addChordToCollection={this.addChordToCollection}
                clearChordCollection={this.clearChordCollection}
                collection={collection}>
              </CollectionActions>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
