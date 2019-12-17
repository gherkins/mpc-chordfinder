import React from 'react';
import { Link } from 'react-router-dom';

export default class CollectionActions extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col col-12">
          <button
            className="btn btn-block text-left"
            onClick={this.props.addChordToCollection}>
            Add chord to collection
          </button>
          <Link to={'/collection/' + this.props.collection.join('-')} target="_blank">
            <button
              className='btn btn-block text-left'
              disabled={0 === this.props.collection.length}>
              Show chord-collection ({this.props.collection.length})
            </button>
          </Link>
          <button
            className="btn btn-block text-left"
            disabled={0 === this.props.collection.length}
            onClick={this.props.clearChordCollection}>
            Clear chord-collection
          </button>
        </div>
      </div>
    );
  }
}
