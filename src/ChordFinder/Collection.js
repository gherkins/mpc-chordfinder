import React from 'react';

export default class Collection extends React.Component {
  render() {
    let chordNames = [];
    this.props.collection.forEach(function (chord) {
      chordNames.push(chord.name);
    });
    return (
      <div className="row">
        <div className="col col-12">
          <button
            className="btn btn-white btn-block text-left"
            onClick={this.props.addChordToCollection}>
            Add chord to collection
          </button>
          <button
            className='btn btn-white btn-block text-left'
            disabled={0 === this.props.collection.length}
            onClick={this.props.showChordCollection}>
            Show chord-collection ({this.props.collection.length})
          </button>
        </div>
      </div>
    );
  }
}
