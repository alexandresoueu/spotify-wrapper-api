import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const getAlbum = id =>
/*eslint-disable */
  fetch(`${API_URL}/albums/${id}`, HEADERS)
    .then(toJSON)
/* eslint-enable */

export const getAlbums = ids =>
/*eslint-disable */
  fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS)
    .then(toJSON)
/* eslint-enable */

export const getAlbumTracks = id =>
/*eslint-disable */
  fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
    .then(toJSON)
/* eslint-enable */
