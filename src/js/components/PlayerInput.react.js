var React = require('react');
var ReactPropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;

var DartboardActions = require('../actions/DartboardActions');

var ENTER_KEY_CODE = 13;

var PlayerInput = React.createClass({

  propTypes: {
    className   : ReactPropTypes.string,
    id          : ReactPropTypes.string,
    placeholder : ReactPropTypes.string,
    onSave      : ReactPropTypes.func.isRequired,
    value       : ReactPropTypes.string
  },

  getDefaultProps: function() {
      return {
         className   : 'PlayerInput'
        ,placeholder : 'Nom du joueur'
        ,buttonAfter : <Button bsStyle={ 'default' }><span className="glyphicon glyphicon-plus"></span></Button>
      };
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {
    return (
      <Input type        = 'text' 
             className   = { this.props.className }
             id          = { this.props.id }
             placeholder = { this.props.placeholder }
             onChange    = { this._onChange }
             onKeyDown   = { this._onKeyDown }
             value       = { this.state.value }
             autoFocus   = { true}
             buttonAfter = { <Button onClick={ this._save }><i className="glyphicon glyphicon-plus"></i></Button> } />
    );
  },

  _save: function() {
    var value = (this.state.value == '') ? 'Joueur ' + this.props.playernum : this.state.value;
    this.props.onSave(value);
    this.setState({ value : '' });
  },

  _onChange: function(event) {
    this.setState({ value: event.target.value });
  },
  
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) { this._save(); }
  }

});

module.exports = PlayerInput; 