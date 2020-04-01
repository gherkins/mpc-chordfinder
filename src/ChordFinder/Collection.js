import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import teoria from 'teoria';
import Clipboard from 'react-clipboard.js';
import html2canvas from 'html2canvas';

import Pads from './Pads';

class Collection extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.gtag('event', 'view', {
      'event_category': 'showCollection',
      'event_label': window.location.hash,
    });
  }

  trackClipboardCopy() {
    window.gtag('event', 'button-clicked', {
      'event_category': 'copyCollectionToClipboard',
      'event_label': window.location.hash,
    });
  }

  exportAsJPG() {
    window.gtag('event', 'button-clicked', {
      'event_category': 'exportAsJPG',
      'event_label': window.location.hash,
    });
    const pads = document.querySelectorAll('.pad');
    const shadowValue = pads[0].style.boxShadow;
    document.querySelectorAll('.pad').forEach((pad) => {
      pad.style.boxShadow = 'none';
    });
    const chordCollection = document.querySelector('.container.collection');
    html2canvas(chordCollection, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#3862fd',
    })
      .then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 0.5);
        const link = document.createElement('a');
        link.download = 'mpc-chord-collection';
        link.href = imgData;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.querySelectorAll('.pad').forEach((pad) => {
          pad.style.boxShadow = shadowValue;
        });
      });
  }

  render() {
    let chords = [];
    try {
      let urlParts = window.location.href.split('/');
      let chordsNames = urlParts.pop().split('-');
      var numberOfPads = parseInt(urlParts.pop());
      chordsNames.forEach(function (chordName) {
        let chord = teoria.chord(chordName);
        chords.push(chord);
      });
    } catch (e) {
      return <Redirect to={'/'} />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <h2>MPC-Chords ({chords.length})</h2>
            </div>
          </div>
          <div className="row actions">
            <div className="col col-12">
              <Link to={'/'}>
                <button className="btn btn-block text-left back">
                  Back to the Chord-Finder-App
                </button>
              </Link>
              <Clipboard
                data-clipboard-text={window.location.href}
                className="btn btn-block text-left"
                onClick={this.trackClipboardCopy}
                component="button">
                Copy collection-URL to clipboard
              </Clipboard>
              <button className="btn btn-block text-left mb-0" onClick={this.exportAsJPG}>
                Export collection as JPG-Image
              </button>
            </div>
          </div>
        </div>
        <div className="container collection">
          {Array.from(chords, (chord, index) =>
            <div className={'chord'} key={index}>
              <div className="row">
                <div className="col col-12">
                  <h3>{chord.name}</h3>
                </div>
              </div>
              <Pads
                key={index}
                currentChord={chord}
                numberOfPads={numberOfPads}
              />
            </div>,
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;
