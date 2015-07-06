var _ = require('underscore');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var DartBoardActions = require('../actions/DartBoardActions');
var PlayerInput = require('./PlayerInput.react');


var Header = React.createClass({
  render: function() {
    var cols = [];
    _.map(this.props.zones, function(zone) {
      cols.push(<Col md={1} className="h2 text-center">{zone}</Col>)
    },this);
    return (
      <header id="header" className="row">
        <Col md={3}>
          <PlayerInput
            id="new-player"
            placeholder="Nom du joueur"
            onSave={this._onSave}
          />
        </Col>
        {cols}
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
  }

});

module.exports = Header;
