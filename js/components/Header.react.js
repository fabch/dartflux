var _ = require('underscore');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var DartBoardActions = require('../actions/DartBoardActions');
var PlayerInput = require('./PlayerInput.react');


var Header = React.createClass({
  render: function() {
    var cols = [];
    _.map(this.props.zones, function(zone,key) {
      var classSup ='';
      var zoneContent = zone;
      if(zone == 'bulle') {
        classSup ='BulleHeader';
        zoneContent = <i className="glyphicon glyphicon-record"></i>;
      }
      cols.push(<Col md={1} key={zone} className={classSup + ' h2 text-center'}>{zoneContent}</Col>)
    },this);

    return (
      <header id="header" className="row">
        <Col md={3}>
          <PlayerInput
            id="new-player"
            placeholder="Nom du joueur"
            playernum={this.props.playernum}
            onSave={this._onSave}
          />
        </Col>
        {cols}
        <Col md={2} className="h2 text-center">
          <Button bsStyle={ 'default'} onClick={this._cleanBoard}><span className="glyphicon glyphicon-refresh"></span></Button>
        </Col>
      </header>
    );
  },

  /**
   * Event handler called within PlayerInput.
   * Defining this here allows PlayerInput to be used in multiple places
   * in different ways.
   * @param {string} name
   */
  _onSave: function(name) {
    DartBoardActions.createPlayer(name);
  },

  _cleanBoard: function(){
    DartBoardActions.cleanBoard();
  }

});

module.exports = Header;
