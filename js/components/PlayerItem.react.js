var _                = require('underscore');
var React            = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
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

    var playerZones = [];
    var classes = 'PlayerItem row ';
    if(this.props.player.isSelected) classes += 'text-info';
    _.map(this.props.zones, function(zone) {
      playerZones.push(<PlayerZone key={zone} click={this.props.player.isSelected}  zone={zone} value={this.props.player.zones[zone]} playerid={this.props.playerid} />);
    },this);

    return (
      <div className={classes}>
        <Col md={3} className="h2 text-right">{ this.props.player.name }</Col>
        {playerZones}
        <Col md={2} className="h2 text-center">{ this.props.player.score }</Col>
      </div>
    );
  }

});

module.exports = PlayerItem;
