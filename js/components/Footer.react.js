var _ = require('underscore');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var DartBoardActions = require('../actions/DartBoardActions');
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;


var Header = React.createClass({
  render: function() {
    return (
      <footer id="footer" className="row">
        <Col md={7} mdOffset={3}>
          <Button bsStyle={'success'} onClick={this._onClick} className="btn-lg btn-block"><span className="glyphicon glyphicon-chevron-down"></span>Joueur suivant</Button>
        </Col>
      </footer>
    );
  },

  /**
   * @param {string} name
   */
  _onClick: function() {
    DartBoardActions.selectNextPlayer();
  }

});

module.exports = Header;
