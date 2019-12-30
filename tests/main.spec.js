import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../src/main.js'

describe("API SPOTIFY", () => {

    let fetchedStub
    let promise

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch')
        promise = fetchedStub.returnsPromise()
    })

    afterEach(() => {
        fetchedStub.restore()
    })

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

    describe("Generic Search", () => {

        it("should call fetch function", () => {
            const artist = search()

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fecth", () => {
            context("passing one type", () => {
                const artists = search('incubus', 'artist')

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist')

                const albums = search('incubus', 'album')
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=incubus&type=album')
            })

            context("passing two types", () => {
                const artistsAndAlbums = search('incubus', ['artist', 'album'])

                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist,album')
            })
        })

        it("should return the json data from the promise ", () => {
            promise.resolves({ body: 'json' })

            const artists = search('soundgarden', 'artist')

            expect(artists.resolveValue).to.be.eql({ body: 'json' })
        })
    })

    describe("Search for artist", () => {
        it("should call fetch function", () => {
            const artists = searchArtists('Incubus')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const artists = searchArtists('Incubus')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

            const artistsTwo = searchArtists('Soundgarden')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Soundgarden&type=artist')
        })
    })

    describe("Search for album", () => {
        it("should call fetch function", () => {
            const albums = searchAlbums('bush')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const albums = searchAlbums('bush')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=bush&type=album')

            const albumsTwo = searchAlbums('soundgarden')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=soundgarden&type=album')
        })
    })

    describe("Search for track", () => {
        it("should call fetch function", () => {
            const tracks = searchTracks('limpbizkit')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const tracks = searchTracks('limpbizkit')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=limpbizkit&type=track')

            const tracksTwo = searchTracks('braza')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=braza&type=track')
        })
    })

    describe("Search for playlist", () => {
        it("should call fetch function", () => {
            const playlists = searchPlaylists('braza')

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const playlists = searchPlaylists('braza')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=braza&type=playlist')

            const playlistsTwo = searchPlaylists('izenzee')
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=izenzee&type=playlist')
        })
    })
})