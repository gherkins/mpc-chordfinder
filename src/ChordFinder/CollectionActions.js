import React from 'react';

export default class CollectionActions extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col col-12">
          <button
            className="btn btn-white btn-block text-left"
            onClick={this.props.addChordToCollection}>
            Add chord to collection
          </button>
          <a
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            href={0 === this.props.collection.length ? undefined : '/collection/' + this.props.collection.join('-')}
            className='btn btn-white btn-block text-left'>
            Show chord-collection ({this.props.collection.length})
          </a>
          <button
            className="btn btn-white btn-block text-left"
            disabled={0 === this.props.collection.length}
            onClick={this.props.clearChordCollection}>
            Clear chord-collection
          </button>
        </div>
      </div>
    );
  }
}
