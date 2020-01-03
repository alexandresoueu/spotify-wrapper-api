import { API_URL, HEADERS } from './config.js'
import { toJSON } from './utils.js'

export const getAlbum = (id) =>
    fetch(`${API_URL}/albums/${id}`, HEADERS)
        .then(toJSON)

export const getAlbums = (ids) => {
    fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS)
        .then(toJSON)
}

export const getAlbumTrack = (id) =>
    fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
    .then(toJSON)