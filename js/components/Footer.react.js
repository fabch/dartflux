var _                       = require('underscore');
var React                   = require('react/addons');
var ReactBootstrap          = require('react-bootstrap');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Col                     = ReactBootstrap.Col;
var Button                  = ReactBootstrap.Button;

var DartBoardActions = require('../actions/DartBoardActions');

var Header = React.createClass({
  render: function() {
    return (
      <footer id ="footer" className="row">
        <Col md={ 7 } mdOffset={ 3 }>
            <Button ref="NextPlayerBtn" bsStyle={ 'success' } onClick={ this._onClick } className="btn-lg btn-block animated flipInX ">
              <span className="glyphicon glyphicon-chevron-down"></span>
              Joueur suivant
            </Button>
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
