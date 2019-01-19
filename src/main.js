export const search = (query, type) =>
/*eslint-disable */  
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
  .then(data => data.json())
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
