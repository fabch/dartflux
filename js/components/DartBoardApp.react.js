var _                       = require('underscore');
var assign                  = require('object-assign');
var React                   = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var ReactBootstrap          = require('react-bootstrap');
var Grid                    = ReactBootstrap.Grid;

var DartboardStore   = require('../stores/DartboardStore');
var DartBoardActions = require('../actions/DartBoardActions');
var Header           = require('../components/Header.react');
var Footer           = require('../components/Footer.react');
var PlayerItem       = require('../components/PlayerItem.react');
var Cible            = require('../components/Cible.react');

function getDartboardState() {
  return {
      players             : DartboardStore.getPlayers()
     ,selectedPlayer      : DartboardStore.getSelectedPlayer()
     ,selectedPlayerIndex : DartboardStore.getSelectedPlayerIndex()
     ,zones               : DartboardStore.getZones()
     ,playerNum           : DartboardStore.getPlayerNum()
  };
}

var DEBUG = false;
function debugInfo(a,b){
  console.group('Props & State //DartboardApp');
  console.info(a);
  console.info(b);
  console.groupEnd();
}

function computePlayersItems(s){
    return _.map(s.state.players, function(player,key) {
      return <PlayerItem  key            = { player.id } 
                          player         = { player } 
                          selectedPlayer = { this.state.selectedPlayer } 
                          zones          = { this.state.zones }
                          onDeletePlayer = { this._onDeletePlayer } />
    }, s);
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

  render: function() { if(DEBUG) debugInfo(this.props,this.state);
    var footer = (this.state.players.length > 1) ? <Footer /> : '';
    var playersItems = computePlayersItems(this);

  	return (
      <Grid fluid={ true }>
        <Header zones={ this.state.zones } playernum={ this.state.playerNum } onCleanBoard={ this._onCleanBoard } />
        <ReactCSSTransitionGroup transitionName="line"  transitionEnter={ true } transitionLeave={ false }>
          { playersItems }
        </ReactCSSTransitionGroup>
        { footer }
        <Cible />
      </Grid>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onDeletePlayer: function(playerid) {

    var shortedPlayers = _.reject(this.state.players, function(player){ return player.id == playerid; });
    this.setState({ players : shortedPlayers });
    DartBoardActions.destroyPlayer(playerid);
  },

   _onCleanBoard: function(){
    if(this.state.players.length > 0) DartBoardActions.cleanBoard();
  },


  _onChange: function() {
    this.setState(getDartboardState());
  }

});

module.exports = DartboardApp;