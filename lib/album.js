'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _utils = require('./utils');

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return (
    /*eslint-disable */
    fetch(_config.API_URL + '/albums/' + id, _config.HEADERS).then(_utils.toJSON)
  );
};
/* eslint-enable */

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return (
    /*eslint-disable */
    fetch(_config.API_URL + '/albums/?ids=' + ids, _config.HEADERS).then(_utils.toJSON)
  );
};
/* eslint-enable */

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return (
    /*eslint-disable */
    fetch(_config.API_URL + '/albums/' + id + '/tracks', _config.HEADERS).then(_utils.toJSON)
  );
};
/* eslint-enable */