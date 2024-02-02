import { dev } from '$app/environment';
import { i18n } from '$lib/i18n';

const ContentTranslations = import.meta.glob("./content.*.svelte");

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// load the content for the current language
export async function load({ url }) {
    const lang = i18n.getLanguageFromUrl(url)
    const content = /** @type {any}*/ (await ContentTranslations[`./content.${lang}.svelte`]()).default;
    return { content };
}