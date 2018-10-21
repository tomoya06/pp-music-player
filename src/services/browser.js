import { fetchPromise } from '@/util/util.js'

export const searchService = function (host, type, key, page, limit = 20) {
  const typeNo = type.value
  const url = `${host}/search?keywords=${key}&limit=${limit}&offset=${page}&type=${typeNo}`

  return fetchPromise(url)
}
