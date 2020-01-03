import { API_URL, HEADERS  } from './config.js'
import { toJSON } from './utils.js'

export const search = (query, type) =>
    fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
    .then(toJSON)

export const searchArtists = (query) =>
    search(query, 'artist')

export const searchAlbums = (query) =>
    search(query, 'album')

export const searchTracks = (query) =>
    search(query, 'track')

export const searchPlaylists = (query) =>
    search(query, 'playlist')