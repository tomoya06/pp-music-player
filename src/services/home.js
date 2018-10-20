import { fetchPromise } from '@/util/util.js'

export const homeService = function(host) {

	const url = `${host}/storage-status`

	return fetchPromise(url, 'DB ERROR');
	// return new Promise((resolve, reject) => {
	// 	fetch(url)
	// 		.then((response) => response.json())
	// 		.then((json) => {
	// 			if (json.code !== 200) {
	// 				throw new Error('db error');
	// 			}
	// 			return resolve(json);
	// 		})
	// 		.catch((error) => {
	// 			console.warn(error);
	// 			return reject(error);
	// 		})
	// })
}