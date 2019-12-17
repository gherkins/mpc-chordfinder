import React from 'react';

export default class NoteSelect extends React.Component {
  render() {
    return (
      <select
        value={this.props.value}
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
