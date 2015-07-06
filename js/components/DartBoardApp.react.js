var _              = require('underscore');
var assign         = require('object-assign');
var React          = require('react');
var DartboardStore = require('../stores/DartboardStore');
var Header         = require('../components/Header.react');
var Footer         = require('../components/Footer.react');
var PlayerItem     = require('../components/PlayerItem.react');


function getDartboardState() {
  return {
     players: DartboardStore.getPlayers()
    ,selectedPlayer: DartboardStore.getSelectedPlayer()
    ,zones: DartboardStore.getZones()
  };
}

var debug = false;
function debugInfo(a,b){
  console.group('Props & State //DartboardApp');
    console.info(a);
    console.info(b);
  console.groupEnd();
}

var DartboardApp = React.createClass({

  getInitialState: function() {
    return getDartboardState();
  },

  componentDidMount: function() {
    DartboardStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DartboardStore.removeChangeListener(this._onChange);
  },

  render: function() {
    if(debug) debugInfo(this.props,this.state);

    var playersItems = [];
    _.map(this.state.players, function(player,key) {
      playersItems.push(<PlayerItem key={key} playerid={key} player={player} zones={this.state.zones} />);
    },this);

  	return (
      <div className="container-fluid">
        <Header zones={this.state.zones} />
        {playersItems}
        <Footer selectedPlayer={this.state.selectedPlayer} />
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getDartboardState());
  }

});

module.exports = DartboardApp;