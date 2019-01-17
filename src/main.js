export const search = (query, type) =>
/*eslint-disable */  
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);
/* eslint-enable */
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
