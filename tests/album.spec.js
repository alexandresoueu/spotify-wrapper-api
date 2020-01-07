import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index.js'

describe("Album", () => {
    let fetchedStub
    let promise
    let spotify

    beforeEach(() => {
        spotify = new SpotifyWrapper({
            token: 'foo'
        })
        fetchedStub = sinon.stub(global, 'fetch')
        promise = fetchedStub.returnsPromise()    
    })

    afterEach(() => {
        fetchedStub.restore()
    })

    describe("Smoke tests", () => {
        it("should have getAlbum method", () => {
            expect(spotify.album.getAlbum).to.exist
        })

        it("should have getAlbumTrack method", () => {
            expect(spotify.album.getTracks).to.exist
        })
    })

    describe("getAlbum", () => {
        it("should call fetch method", () => {
            const album = spotify.album.getAlbum()

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should receive the correct url to fetch", () => {
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRFTy')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRFTy')

            const albumTwo = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRFTp')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRFTp')
        })

        it("should return the correct data from promise", () => {
            promise.resolves({ body: 'json' })

            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRFTy')

            expect(album.resolveValue).to.be.eql({ body: 'json' })
        })
    })

    describe("getAlbums", () => {
        it("should call fetch method", () => {
            const albums = spotify.album.getAlbums()

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should call fetch with the correct url", () => {
            const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRFTy', '4aawyAB9vmqN3uQ7FjRFTq'])

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRFTy,4aawyAB9vmqN3uQ7FjRFTq')
        })

        it("should return the correct data from promise", () => {
            promise.resolves({ album: 'name' })

            const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRFTy', '4aawyAB9vmqN3uQ7FjRFTq'])
            expect(albums.resolveValue).to.be.eql({ album: 'name'})
        })
    })

    describe("getAlbumTrack", () => {
        it("should call fetch method", () => {
            const track = spotify.album.getTracks()

            expect(fetchedStub).to.have.been.calledOnce
        })

        it("should call fetch with the correct url", () => {
            const track = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRFTy')

            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRFTy/tracks')
        })

        it("should return the correct data from promise", () => {
            promise.resolves({ body: 'json' })

            const track = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRFTy')
        
            expect(track.resolveValue).to.be.eql({ body : 'json' })
        })
    })
})  