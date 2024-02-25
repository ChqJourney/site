
/** @type {import('./$types').LayoutLoad} */
export function load({ params }) {
	return {
		name:params.slug,
		persons: ["patrick","penny","jim ji"]
	};
}
