import React from 'react';

export default class PadSelect extends React.Component {
  render() {
    return (
      <select
        aria-label="Select 12 or 16 pads"
        value={this.props.value}
        className="form-control"
        onChange={this.props.changeNumberOfPads}>
        <option value="16">16 pads</option>
        <option value="12">12 pads</option>
      </select>
    );
  }
}
