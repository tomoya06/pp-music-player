import musicAPI from 'music-api'

const limit = 20
const all = 'xiami'
const raw = true

export const searchSongs = function (key, page) {
  const searchResult = musicAPI.searchSong(all, {
    key,
    limit,
    page,
    raw
  })
  console.log(searchResult)
  return searchResult
}

export const searchAlbums = function (key, page) {
  const searchResult = musicAPI.searchAlbum(all, {
    key,
    limit,
    page,
    raw
  })
  console.log(searchResult)
  return searchResult
}
