import { expect } from 'chai'
import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../src/main.js'

describe("API SPOTIFY", () => {
    describe("Smoke tests", () => {
        it("should exist search method", () => {
            expect(search).to.exist
        })

        it("should exist searchArtists method", () => {
            expect(searchArtists).to.exist
        })

        it("should exist searchAlbums method", () => {
            expect(searchAlbums).to.exist
        })

        it("should exist searchTracks method", () => {
            expect(searchTracks).to.exist
        })

        it("should exist searchPlaylists method", () => {
            expect(searchPlaylists).to.exist
        })
    })
})