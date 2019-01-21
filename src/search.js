import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
/*eslint-disable */
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
    .then(toJSON)
/* eslint-enable */
export const searchAlbums = query =>
/*eslint-disable */
  search(query, 'album');
/* eslint-enable */

export const searchArtists = query =>
/*eslint-disable */
  search(query, 'artist');
/* eslint-enable */

export const searchTracks = query =>
/*eslint-disable */
  search(query, 'tracks');
/* eslint-enable */

export const searchPlaylists = query =>
/*eslint-disable */
  search(query, 'playlist');
/* eslint-enable */
