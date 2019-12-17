(this["webpackJsonpmpc-chordfinder-2"]=this["webpackJsonpmpc-chordfinder-2"]||[]).push([[0],{31:function(e,t,a){e.exports=a(52)},36:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),l=a.n(c),r=(a(36),a(2)),i=a(3),s=a(5),m=a(4),u=a(11),h=a(6),p=a(15),d=a(10),b=a(14),v=a.n(b),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{value:this.props.value,className:"form-control",onChange:this.props.changeNumberOfPads},o.a.createElement("option",{value:"16"},"16 pads"),o.a.createElement("option",{value:"12"},"12 pads"))}}]),t}(o.a.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{value:this.props.value,className:"form-control",onChange:this.props.changeRootNote},o.a.createElement("option",{value:"C",className:"active"},"C"),o.a.createElement("option",{value:"C#"},"C# (Db)"),o.a.createElement("option",{value:"D"},"D"),o.a.createElement("option",{value:"D#"},"D# (Eb)"),o.a.createElement("option",{value:"E"},"E"),o.a.createElement("option",{value:"F"},"F"),o.a.createElement("option",{value:"F#"},"F# (Gb)"),o.a.createElement("option",{value:"G"},"G"),o.a.createElement("option",{value:"G#"},"G# (Ab)"),o.a.createElement("option",{value:"A"},"A"),o.a.createElement("option",{value:"A#"},"A# (Bb)"),o.a.createElement("option",{value:"B"},"B"))}}]),t}(o.a.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("select",{value:this.props.value,className:"form-control",onChange:this.props.changeChordType},o.a.createElement("option",{value:""},"maj"),o.a.createElement("option",{value:"maj7"},"maj7"),o.a.createElement("option",{value:"maj7b5"},"maj7b5"),o.a.createElement("option",{value:"maj7#5"},"maj7#5"),o.a.createElement("option",{value:"min"},"min"),o.a.createElement("option",{value:"min7"},"min7"),o.a.createElement("option",{value:"min7b5"},"min7b5"),o.a.createElement("option",{value:"min7#5"},"min7#5"),o.a.createElement("option",{value:"min6"},"min6"),o.a.createElement("option",{value:"mmaj7"},"mmaj7"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"7b5"},"7b5"),o.a.createElement("option",{value:"7#5"},"7#5"),o.a.createElement("option",{value:"7sus4"},"7sus4"),o.a.createElement("option",{value:"aug"},"aug"),o.a.createElement("option",{value:"dim"},"dim"),o.a.createElement("option",{value:"dim7"},"dim7"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"sus2"},"sus2"),o.a.createElement("option",{value:"sus4"},"sus4"),o.a.createElement("option",{value:"sus2sus4"},"sus2sus4"))}}]),t}(o.a.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.props.numberOfPads,t=this.props.currentChord,a=[],n=v.a.scale("c","chromatic").notes(),c=function(o){var c=n[o%12],l="",r="";if(t.notes().forEach((function(e){c.chroma()===e.chroma()&&(l="active",r=e.name()+e.accidental())})),a.push({name:r,chroma:c.chroma(),activeClass:l}),12===e&&0===(o+1)%3&&a.push({}),16===a.length)return"break"},l=0;l<16;l++){if("break"===c(l))break}var r=[a[12],a[13],a[14],a[15],a[8],a[9],a[10],a[11],a[4],a[5],a[6],a[7],a[0],a[1],a[2],a[3]];return o.a.createElement("div",{className:"row pads pads-"+e},Array.from(r,(function(e,t){return o.a.createElement("div",{className:"col col-3 pad-container",key:t},o.a.createElement("div",{className:"embed-responsive embed-responsive-1by1 text-center"},o.a.createElement("div",{className:"embed-responsive-item pad "+e.activeClass},o.a.createElement("span",{className:"pad-name align-middle"},e.name))))})))}}]),t}(o.a.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-12"},o.a.createElement("button",{className:"btn btn-block text-left",onClick:this.props.addChordToCollection},"Add chord to collection"),o.a.createElement(p.b,{to:"/collection/"+this.props.numberOfPads+"/"+this.props.collection.join("-")},o.a.createElement("button",{className:"btn btn-block text-left",disabled:0===this.props.collection.length},"Show chord-collection (",this.props.collection.length,")")),o.a.createElement("button",{className:"btn btn-block text-left",disabled:0===this.props.collection.length,onClick:this.props.clearChordCollection},"Clear chord-collection")))}}]),t}(o.a.Component),N=a(30),y=a.n(N),g=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[];try{var t=window.location.href.split("/"),a=t.pop().split("-"),n=parseInt(t.pop());a.forEach((function(t){var a=v.a.chord(t);e.push(a)}))}catch(c){return o.a.createElement(d.a,{to:"/"})}return o.a.createElement("div",{className:"collection"},o.a.createElement("div",{className:"row actions"},o.a.createElement("div",{className:"col col-12"},o.a.createElement("h2",null,"MPC-Chords"),o.a.createElement(p.b,{to:"/"},o.a.createElement("button",{className:"btn btn-block text-left back"},"Back to the Chord-Finder-App")),o.a.createElement(y.a,{"data-clipboard-text":window.location.href,className:"btn btn-block text-left mb-0",component:"button"},"Copy collection-URL to clipboard"))),Array.from(e,(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-12"},o.a.createElement("h3",null,e.name))),o.a.createElement(O,{key:t,currentChord:e,numberOfPads:n}))})))}}]),t}(o.a.Component),k=(a(51),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={numberOfPads:16,rootNote:"C",chordType:"",collection:[]},a.changeNumberOfPads=a.changeNumberOfPads.bind(Object(u.a)(a)),a.changeRootNote=a.changeRootNote.bind(Object(u.a)(a)),a.changeChordType=a.changeChordType.bind(Object(u.a)(a)),a.addChordToCollection=a.addChordToCollection.bind(Object(u.a)(a)),a.clearChordCollection=a.clearChordCollection.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"changeNumberOfPads",value:function(e){this.setState({numberOfPads:parseInt(e.target.value)})}},{key:"changeRootNote",value:function(e){this.setState({rootNote:e.target.value})}},{key:"changeChordType",value:function(e){this.setState({chordType:e.target.value})}},{key:"addChordToCollection",value:function(){this.state.collection.push(this.state.rootNote+this.state.chordType),this.setState({collection:this.state.collection})}},{key:"clearChordCollection",value:function(){this.setState({collection:[]})}},{key:"render",value:function(){var e=v.a.chord(this.state.rootNote+this.state.chordType),t=this.state.numberOfPads,a=this.state.collection;return o.a.createElement(p.a,{basename:"/"},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/collection/:pads/:chords",exact:!0,component:g}),o.a.createElement(d.b,{path:"/",exact:!0},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-12"},o.a.createElement("h2",null,"MPC-Chord-Finder"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-12"},o.a.createElement(E,{changeNumberOfPads:this.changeNumberOfPads,value:this.state.numberOfPads}),o.a.createElement(f,{changeRootNote:this.changeRootNote,value:this.state.rootNote}),o.a.createElement(C,{changeChordType:this.changeChordType,value:this.state.chordType}))),o.a.createElement(O,{numberOfPads:t,currentChord:e}),o.a.createElement("p",null),o.a.createElement(j,{addChordToCollection:this.addChordToCollection,clearChordCollection:this.clearChordCollection,numberOfPads:t,collection:a})))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ca8dbd08.chunk.js.map