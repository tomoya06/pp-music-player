import { fetchPromise } from '@/util/util.js'

export const keywords = ['songs', 'albums', 'artists']
const typeId = [1, 10, 100]

export const getCollectionsService = (host, usr_id, typeIndex) => {

	let url = `${host}/user/likes?id=${usr_id}&type=${typeId[typeIndex]}`
	return fetchPromise(url);
}