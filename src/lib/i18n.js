// ./src/lib/i18n-routing.ts
import {
	sourceLanguageTag,
    isAvailableLanguageTag,
} from "$paraglide/runtime"

/**
 * Returns the path in the given language, regardless of which language the path is in.
 * 
 * @param {string} path The path to translate
 * @param {import("$paraglide/runtime").AvailableLanguageTag} lang The language to translate to
 */
export function route(path, lang) {
	path = withoutLanguageTag(path)

	// Don't prefix the default language
	if (lang === sourceLanguageTag) return path

	// Prefix all other languages
	return `/${lang}${path}`
}

/**
 * Returns the path without the language tag
 * @param {string} path The path to remove the language tag from
 */
function withoutLanguageTag(path) {
	const [_, maybeLang, ...rest] = path.split("/")
	if (isAvailableLanguageTag(maybeLang)) {
		return `/${rest.join('/')}`
	}
	return path
}