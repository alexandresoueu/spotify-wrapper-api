'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTrack = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config.js');

var _utils = require('./utils.js');

var getAlbum = exports.getAlbum = function getAlbum(id) {
    return fetch(_config.API_URL + '/albums/' + id, _config.HEADERS).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
    fetch(_config.API_URL + '/albums/?ids=' + ids, _config.HEADERS).then(_utils.toJSON);
};

var getAlbumTrack = exports.getAlbumTrack = function getAlbumTrack(id) {
    return fetch(_config.API_URL + '/albums/' + id + '/tracks', _config.HEADERS).then(_utils.toJSON);
};