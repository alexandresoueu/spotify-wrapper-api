import { API_URL } from './config';
import { toJSON } from './utils';

export const getAlbum = id =>
/*eslint-disable */
  fetch(`${API_URL}/albums/${id}`)
    .then(toJSON)
/* eslint-enable */

export const getAlbums = ids =>
/*eslint-disable */
  fetch(`${API_URL}/albums/?ids=${ids}`)
    .then(toJSON)
/* eslint-enable */

export const getAlbumTracks = id =>
/*eslint-disable */
  fetch(`${API_URL}/albums/${id}/tracks`)
    .then(toJSON)
/* eslint-enable */
