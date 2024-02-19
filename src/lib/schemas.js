import { z } from "zod";
import * as m from "$paraglide/messages";
import { browser } from '$app/environment'; 
import { languageTag } from "$paraglide/runtime";

if (browser)
	console.log(`schemas.js: Browser ${languageTag()}`);
else
	console.log(`schemas.js: Server ${languageTag()}`);

export const testSchema = z.object({
	test_locale: z.string().min(1, m.localized_string())
});