export const getAlbum = id =>
/*eslint-disable */
  fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json())
/* eslint-enable */

export const getAlbums = ids =>
/*eslint-disable */
  fetch(`https://api.spotify.com/v1/albums/?ids=${ids}`)
    .then(data => data.json())
/* eslint-enable */

export const getAlbumTracks = id =>
/*eslint-disable */
  fetch(`https://api.spotify.com/v1/albums/${id}/tracks`)
    .then(data => data.json())
/* eslint-enable */
