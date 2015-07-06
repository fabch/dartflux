var _                = require('underscore');
var React            = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Transition = React.addons.TransitionGroup;
var DartboardStore = require('../stores/DartboardStore');
var DartBoardActions = require('../actions/DartBoardActions');
var PlayerZone       = require('../components/PlayerZone.react');

var debug = false;
function debugInfo(a,b){
  console.group('Props & State //PlayerItem');
    console.info(a);
    console.info(b);
  console.groupEnd();
}

var PlayerItem = React.createClass({
  render: function() {

    if(debug) debugInfo(this.props,this.state);
    var classes = (this.props.player.isSelected) ? 'selectedPlayer' :'';

    var playerZones = [];
    _.map(this.props.zones, function(zone) {

      var canAddPoints = canTakePoints = false;
      if(this.props.selectedPlayer.id != this.props.player.id){
        canAddPoints  = (this.props.selectedPlayer.zones[zone] == 3 && this.props.player.zones[zone] < 3) ? true : false;
        canTakePoints = (this.props.selectedPlayer.zones[zone] < 3 && this.props.player.zones[zone] == 3) ? true : false;
      }
      playerZones.push(<PlayerZone key =           { zone } 
                                   zone =          { zone } 
                                   value =         { this.props.player.zones[zone] } 
                                   click =         { this.props.player.isSelected }
                                   playerid =      { this.props.player.id }
                                   canAddPoints =  { canAddPoints }
                                   canTakePoints = { canTakePoints }
                                    />);
    },this);

    return (
      <div className={'PlayerItem row ' + classes }>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={ true }>
            <Col md={3} ref="name" className="Name h2 text-right">
              <Button className="DeletePlayer btn btn-warning btn-sm pull-left" onClick={ this._removePlayer }><i className="glyphicon glyphicon-minus"></i></Button>
              { this.props.player.name }
            </Col>
            { playerZones }
            <Col md={2} ref="score" className="Score h2 text-center">{ this.props.player.score }</Col>
        </ReactCSSTransitionGroup>
      </div>
    )
  },

  _removePlayer:function(){
    DartBoardActions.destroyPlayer(this.props.player.id);
  }
});

module.exports = PlayerItem;

