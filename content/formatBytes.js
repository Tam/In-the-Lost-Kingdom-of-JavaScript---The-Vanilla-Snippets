/**
 * Format the given bytes to the nearest appropriate size
 *
 * @param {Number|string} bytes
 * @param {Number} decimals
 * @returns {string}
 * @see https://stackoverflow.com/a/18650828/550109
 */
export default function formatBytes (bytes, decimals = 2) {
	if (bytes === 0)
		return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
