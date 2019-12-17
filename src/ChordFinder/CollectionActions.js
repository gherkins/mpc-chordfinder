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
            href={0 === this.props.collection.length ? false : '/collection/' + this.props.collection.join('-')}
            className='btn btn-white btn-block text-left'>
            Show chord-collection ({this.props.collection.length})
          </a>
        </div>
      </div>
    );
  }
}
