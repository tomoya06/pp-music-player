import { fetchPromise } from '@/util/util.js'

export const albumDetailsService = function (host, album_id) {
  const url = `${host}/album?id=${album_id}`
  return fetchPromise(url)
}

export const artistDetailsService = function (host, artist_id) {
  const url = `${host}/artists?id=${artist_id}`
  return fetchPromise(url)
}

export const artistAlbumsService = function (host, artist_id) {
  const url = `${host}/artist/album?id=${artist_id}`
  return fetchPromise(url)
}
