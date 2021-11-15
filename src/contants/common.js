// TODO: Make the number of path segments configurable

export const URL_PREFIX = process.env.PUBLIC_URL ? 
	(() => {
		const u = new URL(process.env.PUBLIC_URL)
		const segments  = u.pathname.split('/')
		if (segments.length > 1) return '/' + segments('/')[1]
		return ''
	})()
: '';
