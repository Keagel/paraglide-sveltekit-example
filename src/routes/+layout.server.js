import * as m from '$paraglide/messages';

export const load = async () => {
    // Depends on a session
    const authenticated = true;

	let menuItems = [];

	if (authenticated) {
		menuItems = [
			{ href: '/', text: m.home(), type: 'link' },
			{ href: '/about', text: m.about(), type: 'link' },
			{ href: '/sverdle', text: m.sverdle(), type: 'link' }
		];
	} else {
		menuItems = [
			{ href: '/', text: m.home(), type: 'link' },
			{ href: '/about', text: m.about(), type: 'link' },
			{ href: '/sverdle', text: m.sverdle(), type: 'link' }
		];
	}

	return {
		menuItems
	};
};
