var _              = require('underscore');
var React          = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col            = ReactBootstrap.Col;
var Row            = ReactBootstrap.Row;
var Button         = ReactBootstrap.Button;

var DartBoardActions = require('../actions/DartBoardActions');
var PlayerInput      = require('./PlayerInput.react');

function computeCols(s){
    return _.map(s.props.zones, function(zone,key) {
      var classSup    = '';
      var zoneContent = zone;
      if(zone == 'bulle') {
        classSup    ='BulleHeader';
        zoneContent = <i className="glyphicon glyphicon-record"></i>;
      }
      return <Col md={ 1 } xs={ 1 } key={ zone } className={ classSup + ' h2 text-center' }>{ zoneContent }</Col>
    }, s);
}

var Header = React.createClass({

  render: function() {
    var cols = computeCols(this);

    return (
      <Row id="header" componentClass="header">
        <Col md={ 3 } xs={ 3 }>
          <PlayerInput id="new-player" placeholder="Nom du joueur" playernum={ this.props.playernum } onSave={ this._onSave } />
        </Col>
        { cols }
        <Col md={ 2 } xs={ 2 } className="h2 text-center">
          <Button bsStyle={ 'default' } onClick={ this._cleanBoard  }>
            <span className="glyphicon glyphicon-refresh"></span>
          </Button>
        </Col>
      </Row>
    );
  },

  _onSave: function(name) {
    DartBoardActions.createPlayer(name);
  },

  _cleanBoard: function(){
    this.props.onCleanBoard();
  }

});

module.exports = Header;
