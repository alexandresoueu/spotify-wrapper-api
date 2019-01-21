'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  return (
    /*eslint-disable */
    fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(_utils.toJSON)
  );
};
/* eslint-enable */
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return (
    /*eslint-disable */
    search(query, 'album')
  );
};
/* eslint-enable */

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return (
    /*eslint-disable */
    search(query, 'artist')
  );
};
/* eslint-enable */

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return (
    /*eslint-disable */
    search(query, 'tracks')
  );
};
/* eslint-enable */

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return (
    /*eslint-disable */
    search(query, 'playlist')
  );
};
/* eslint-enable */