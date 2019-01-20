import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const search = (query, type) =>
/*eslint-disable */  
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
  .then(toJSON)
/* eslint-enable */
export const searchAlbums = (query) => {
  search(query, 'album');
};
export const searchArtists = (query) => {
  search(query, 'artist');
};
export const searchTracks = (query) => {
  search(query, 'tracks');
};
export const searchPlaylists = (query) => {
  search(query, 'playlist');
};
