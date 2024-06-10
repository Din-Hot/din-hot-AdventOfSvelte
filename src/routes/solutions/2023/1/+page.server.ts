import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({ fetch }) => {
	const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json')
	const data = await response.json()

	return {
		list: data
	}
}) satisfies PageServerLoad
