var _                       = require('underscore');
var React                   = require('react');
var ReactPropTypes          = React.PropTypes;
var ReactBootstrap          = require('react-bootstrap');
var Col                     = ReactBootstrap.Col;
var Row                     = ReactBootstrap.Row;
var Button                  = ReactBootstrap.Button;
var DartboardStore   = require('../stores/DartboardStore');
var DartBoardActions = require('../actions/DartBoardActions');
var PlayerZone       = require('../components/PlayerZone.react');

var DEBUG = false;
function debugInfo(a,b){
  console.group('Props & State //PlayerItem');
  console.info(a);
  console.info(b);
  console.groupEnd();
}

function computePlayerZones(s){
  return _.map(s.props.zones, function(zone) {
    var canAddPoints = canTakePoints = false;
    if(this.props.selectedPlayer.id != this.props.player.id){
      canAddPoints  = (this.props.selectedPlayer.zones[zone] == 3 && this.props.player.zones[zone]  < 3) ? true : false;
      canTakePoints = (this.props.selectedPlayer.zones[zone]  < 3 && this.props.player.zones[zone] == 3) ? true : false;
    }
    return <PlayerZone key =           { zone } 
                       zone =          { zone } 
                       value =         { this.props.player.zones[zone] } 
                       click =         { this.props.player.isSelected }
                       playerid =      { this.props.player.id }
                       canAddPoints =  { canAddPoints }
                       canTakePoints = { canTakePoints } />
  }, s);
}

var PlayerItem = React.createClass({

  propTypes: {
    player : ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      player: this.props.player
    };
  },

  render: function() { if(DEBUG) debugInfo(this.props,this.state);
    var classes     = (this.props.player.isSelected) ? 'selectedPlayer' : '';
    var playerZones = computePlayerZones(this);

    return (
      <Row ref={ 'PlayerRow_' + this.state.player.id } className={ 'PlayerItem ' + classes }>
            <Col md={ 3 } ref={ 'name_' + this.props.player.id } className="Name h2 text-right">
              <Button className="DeletePlayer btn btn-warning btn-sm pull-left" onClick={ this._removePlayer }>
                <i className="glyphicon glyphicon-minus"></i>
              </Button>
              { this.props.player.name }
            </Col>
            { playerZones }
            <Col md={ 2 } ref={ 'score_' + this.props.player.id } className="Score h2 text-center">{ this.props.player.score }</Col>
      </Row>
    )
  },

  _removePlayer: function(){
    this.props.onDeletePlayer(this.state.player.id);
  }

});

module.exports = PlayerItem;