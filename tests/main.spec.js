import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

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

    describe("Generic Search", () => {
        let fetchedStub
        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch')
        })

        afterEach(() => {
            fetchedStub.restore()
        })

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
    })
})