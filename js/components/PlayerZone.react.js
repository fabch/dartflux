var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var ReactPropTypes = React.PropTypes;
var DartBoardActions = require('../actions/DartBoardActions');

var debug = false;
function debugInfo(a,b){
  console.group('Props & State //PlayerZone');
    console.info(a);
    console.info(b);
  console.groupEnd();
}

var PlayerZone = React.createClass({
  propTypes: {
      zone:      React.PropTypes.oneOf(['20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1','bulle'])
     ,value:     React.PropTypes.number
  },

  render: function() {
  	if(debug) debugInfo(this.props,this.state);
    var onClickFn = (this.props.click) ? this._click : null;
    return (
      <Col md={1} className="PlayerZone h2 text-center" onClick={onClickFn}>{this.props.value}</Col>
    );
  },

    /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _click: function() {
    DartBoardActions.addPointTo(this.props.playerid, this.props.zone);
  }

});

module.exports = PlayerZone;