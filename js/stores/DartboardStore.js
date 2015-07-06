var _                  = require('underscore');
var AppDispatcher      = require('../dispatcher/AppDispatcher');
var EventEmitter       = require('events').EventEmitter;
var DartboardConstants = require('../constants/DartboardConstants');

var assign             = require('object-assign');

var CHANGE_EVENT = 'change';

var _players             = [];
var _selectedPlayer      = undefined;
var _selectedPlayerIndex = undefined;
var _zones               = ['20','19','18','17','16','15','bulle'];
var _playerNum           = 1;

function createPlayer(name) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _players.push({
     id :          id
    ,name :        name
    ,isSelected :  false
    ,zones :       _.object(_zones, [0,0,0,0,0,0,0])
    ,score :       0
  });
  _playerNum +=1;
  if(_selectedPlayerIndex == undefined) selectPlayer(0);
}

function destroyPlayer(id) {
  var index = _.findIndex(_players, function(p){ return p.id == id });
   _players = _.reject(_players, function(player){ return player.id == id; });

  if(_players.length == 0) {
    _selectedPlayer = undefined;
    _selectedPlayerIndex = undefined;
  }else{
    if(_selectedPlayerIndex == index) selectPlayer(_selectedPlayerIndex);
    else if(_selectedPlayerIndex > index) selectPlayer(_selectedPlayerIndex-1);
  }
}

function addPointsTo(id,zone){
  var index = _.findIndex(_players, function(p){ return p.id == id });
  if( _players[index].zones[zone] < 3)  _players[index].zones[zone] += 1;
  else addToScore(id,zone);
}


function addToScore(id,zone){
  var zonePoint = (zone == 'bulle') ? 25 : zone;
  _.map(_players, function(player,key) {
      if(player.zones[zone] < 3 && player.id != id) player.score +=parseInt(zonePoint);
  },this);
}

function selectNextPlayer(){
  var index = (_selectedPlayerIndex +1 >= _players.length) ? 0 : _selectedPlayerIndex + 1;
  selectPlayer(index);
}


function selectPlayer(index){
  _.map(_players, function(player) {
      player.isSelected = false;
  });
  _selectedPlayer            = _players[index];
  _selectedPlayerIndex       = index;
  _players[index].isSelected = true;
}

function cleanBoard(){
  _.map(_players, function(player) {
      player.zones =  _.object(_zones, [0,0,0,0,0,0,0]);
      player.score = 0;
  });
  selectPlayer(0);
}

var DartboardStore = assign({}, EventEmitter.prototype, {

  getPlayers: function() {
    return _players;
  },

  getSelectedPlayer: function() {
    return _selectedPlayer;
  },

  getSelectedPlayerIndex: function(){
    return _selectedPlayerIndex;
  },

  getZones: function() {
    return _zones;
  },

  getPlayerNum: function() {
    return _playerNum;
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

    case DartboardConstants.PLAYER_SELECT:
      selectPlayer(action.id);
      DartboardStore.emitChange();
      break;

    case DartboardConstants.PLAYER_SELECT_NEXT:
      selectNextPlayer();
      DartboardStore.emitChange();
      break;

    case DartboardConstants.BOARD_CLEAN:
      cleanBoard();
      DartboardStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = DartboardStore;
