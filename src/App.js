import React from 'react';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

import teoria, { Scale } from 'teoria';
import teoriaChordProgression from 'teoria-chord-progression';

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
    this.generateRandomChordCollection = this.generateRandomChordCollection.bind(this);
  }

  changeNumberOfPads(e) {
    window.gtag('event', 'select-changed', {
      'event_category': 'changeNumberOfPads',
      'event_label': e.target.value,
    });
    this.setState({ numberOfPads: parseInt(e.target.value) });
  }

  changeRootNote(e) {
    window.gtag('event', 'select-changed', {
      'event_category': 'changeRootNote',
      'event_label': e.target.value,
    });
    this.setState({ rootNote: e.target.value });
  }

  changeChordType(e) {
    window.gtag('event', 'select-changed', {
      'event_category': 'changeChordType',
      'event_label': e.target.value,
    });
    this.setState({ chordType: e.target.value });
  }

  addChordToCollection() {
    window.gtag('event', 'button-clicked', {
      'event_category': 'addChordToCollection',
      'event_label': this.state.rootNote + this.state.chordType,
    });
    this.state.collection.push(this.state.rootNote + this.state.chordType);
    this.setState({ collection: this.state.collection });
  }

  clearChordCollection() {
    window.gtag('event', 'button-clicked', {
      'event_category': 'clearChordCollection',
    });
    this.setState({ collection: [] });
  }

  generateRandomChordCollection() {
    try {
      const scales = Scale.KNOWN_SCALES;
      const scaleName = scales[Math.floor(Math.random() * scales.length)];
      const notes = teoria.scale('c', 'chromatic').notes();
      const note = notes[Math.floor(Math.random() * notes.length)];
      const scale = teoria.scale(note.name(), scaleName);
      const chordProgression = teoriaChordProgression(scale, [2, 5, 1], 4);
      let collection = [];
      chordProgression.getChords().forEach((chord) => {
        collection.push(chord.name);
      });
      window.gtag('event', 'button-clicked', {
        'event_category': 'generateRandomChordCollection',
        'event_label': collection.join('-'),
      });
      this.setState({ collection });
    } catch (e) {
      //just keep on trying
      this.generateRandomChordCollection();
    }
  }

  render() {
    const currentChord = teoria.chord(this.state.rootNote + this.state.chordType);
    const numberOfPads = this.state.numberOfPads;
    const collection = this.state.collection;
    return (
      <HashRouter basename='/'>
        <Switch>
          <Route path={'/collection/:pads/:chords'} exact component={Collection} />
          <Route path={'/'} exact>
            <div className="App">
              <div className="row">
                <div className="col col-12">
                  <h2>MPC-Chord-Finder</h2>
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <PadSelect changeNumberOfPads={this.changeNumberOfPads} value={this.state.numberOfPads} />
                  <NoteSelect changeRootNote={this.changeRootNote} value={this.state.rootNote} />
                  <ChordTypeSelect changeChordType={this.changeChordType} value={this.state.chordType} />
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
                generateRandomChordCollection={this.generateRandomChordCollection}
                numberOfPads={numberOfPads}
                collection={collection}>
              </CollectionActions>
            </div>
          </Route>
          <Route path="*">
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
