import { z } from "zod";
import * as m from "$paraglide/messages";
import { languageTag } from "$paraglide/runtime";

console.log(languageTag());

export const testSchema = z.object({
	test_locale: z.string().min(1, m.localized_string())
});