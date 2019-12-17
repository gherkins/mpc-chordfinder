import React from 'react';

export default class ChordTypeSelect extends React.Component {
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
