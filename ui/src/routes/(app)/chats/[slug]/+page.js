import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if(params.slug===""){
        error(404, 'Not found');
    }
	return {
		name:params.slug,
		persons: ["patrick","penny","jim ji"]
	};
}
