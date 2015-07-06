var React            = require('react/addons');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
    var classCanTakePoints = (this.props.canTakePoints) ? '' : 'hidden';
    var classCanAddPoints  = (this.props.canAddPoints) ? '' : 'hidden';
    return (
        <Col md={1} key={this.props.zone} className="PlayerZone h2 text-center" onClick={onClickFn}>
          <i className={'opponentIndicator glyphicon glyphicon-fire text-warning ' + classCanTakePoints}></i>
          <i className={'opponentIndicator glyphicon glyphicon-screenshot text-info ' + classCanAddPoints}></i>
          <span className="playerZoneIndicator">{this.props.value}</span>
        </Col>
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