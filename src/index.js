import { search, searchAlbums, searchArtists, searchPlaylists, searchTracks } from './search'
import { getAlbum, getAlbums, getAlbumTrack } from './album'
import { API_URL } from './config';

export default class SpotifyWrapper {
    constructor(options) {
        this.apiURL = options.apiURL || API_URL,
        this.token = options.token 
    }

    request(url) {
        const headers = {
            headers: {
                Authorization: `'Bearer ${this.token}'`
            }
        }

        return fetch(url, headers)
    }
}

// module.exports = {
//     search,
//     searchAlbums,
//     searchArtists,
//     searchPlaylists,
//     searchTracks,
//     getAlbum,
//     getAlbums,
//     getAlbumTrack
// }