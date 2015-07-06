/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * PlayerActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var DartboardConstants = require('../constants/DartboardConstants');

var DartboardActions = {

  /**
   * @param  {string} name
   */
  createPlayer: function(name) {
    AppDispatcher.dispatch({
       actionType: DartboardConstants.PLAYER_CREATE
      ,name: name
    });
  },

  /**
   * @param  {string} id
   */
  destroyPlayer: function(id) {
    AppDispatcher.dispatch({
       actionType: DartboardConstants.PLAYER_DESTROY
      ,id: id
    });
  },

  /**
   * @param  {string} id
   */
  addPointTo: function(id,zone) {
    AppDispatcher.dispatch({
       actionType: DartboardConstants.PLAYER_ADD_POINTS
      ,id: id
      ,zone: zone
    });
  },

  /**
   * @param  {string} id
   */
  selectPlayer: function(id) {
    AppDispatcher.dispatch({
       actionType: DartboardConstants.PLAYER_SELECT
      ,id: id
    });
  },


  /**
   * @param  {string} id
   */
  selectNextPlayer: function(id) {
    AppDispatcher.dispatch({
       actionType: DartboardConstants.PLAYER_SELECT_NEXT
      ,id: id
    });
  },

};

module.exports = DartboardActions;
