import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album'

describe('Album', () => {
  let stubedFetch
  let promise

  beforeEach( () => {
    stubedFetch = sinon.stub(global, 'fetch')
    promise = stubedFetch.returnsPromise()
  })

  afterEach( () => {
    stubedFetch.restore()
  })

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(getAlbum).to.exist
    })

    it('Should have getAlbums method', () => {
      expect(getAlbums).to.exist
    })

    it('Should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist
    })
  })

  describe('getAlbum', () => {
    it('Should call fetch method', () => {
      const album = getAlbum()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should called fetch with correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')
      
      const albumx = getAlbum('4aawyAB9vmqN3uQ7FjRGT9')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT9')
    })

    it('Should return the JSON Data from Promise', () => {
      promise.resolves({ album: 'name'})
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
      expect(album.resolveValue).to.be.eql({ album: 'name'})
    })
    
  })

  describe('getAlbums', () => {
    it('Should call fetch method', () => {
      const albums = getAlbums()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should called fetch with correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTn'])
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTn')
    })

    it('Should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'})
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTn'])
      expect(albums.resolveValue).to.be.eql({ album: 'name'})
    })

  })

  describe('getAlbumTracks', () => {
    it('Should call fetch method', () => {
      const albumTrack = getAlbumTracks()
      expect(stubedFetch).to.have.been.calledOnce
    })

    it('Should called fetch with correct URL', () => {
      const albumTrack = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks')
      
      const albumTrackx = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGT9')
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGT9/tracks')
    })

    it('Should return the JSON Data from Promise', () => {
      promise.resolves({ album: 'name'})
      const albumTrack = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy')
      expect(albumTrack.resolveValue).to.be.eql({ album: 'name'})
    })
  })
})
