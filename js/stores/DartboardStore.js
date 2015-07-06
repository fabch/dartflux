var _                  = require('underscore');
var AppDispatcher      = require('../dispatcher/AppDispatcher');
var EventEmitter       = require('events').EventEmitter;
var DartboardConstants = require('../constants/DartboardConstants');
var assign             = require('object-assign');

var CHANGE_EVENT = 'change';

var _players = {};
var _selectedPlayer = undefined;
var _zones = ['20','19','18','17','16','15','bulle'];

function createPlayer(name) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _players[id] = {
     name:  name
    ,isSelected:false
    ,zones: _.object(_zones, [0,0,0,0,0,0,0])
    ,score: 0
  };

  if(_selectedPlayer == undefined) {
    _selectedPlayer = id;
    _players[id].isSelected = true;
  }
}

function destroyPlayer(id) {
  delete _players[id];
}

function addPointsTo(id,zone){
  if( _players[id].zones[zone] < 3)  _players[id].zones[zone] += 1;
  else addToScore(id,zone);
}


function addToScore(id,zone){
  var zonePoint = (zone == 'bulle') ? 25 : zone;
  _.map(_players, function(player,key) {
      console.log(player,key);
      if(player.zones[zone] < 3 && key != id) player.score +=parseInt(zonePoint);
  },this);
}

function selectNextPlayer(id){
  console.log('implement selectNextPlayer');
}


function selectPlayer(id){
  _selectedPlayer = id;
}

var DartboardStore = assign({}, EventEmitter.prototype, {

  getPlayers: function() {
    return _players;
  },

  getSelectedPlayer: function() {
    return _selectedPlayer;
  },

  getZones: function() {
    return _zones;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var name;

  switch(action.actionType) {

    case DartboardConstants.PLAYER_CREATE:
      if (name !== '') {
        createPlayer(action.name);
        DartboardStore.emitChange();
      }
      break;

    case DartboardConstants.PLAYER_DESTROY:
      destroyPlayer(action.id);
      DartboardStore.emitChange();
      break;

    case DartboardConstants.PLAYER_ADD_POINTS:
      addPointsTo(action.id, action.zone);
      DartboardStore.emitChange();
      break;

    case DartboardConstants.PLAYER_SELECT_NEXT:
      selectNextPlayer(action.id);
      DartboardStore.emitChange();
      break;

    case DartboardConstants.PLAYER_SELECT:
      selectPlayer(action.id);
      DartboardStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = DartboardStore;
