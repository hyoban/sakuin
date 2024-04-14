import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { languages } from "sakuin";

// Can be imported from a shared config
const locales = new Set(languages);

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.has(locale)) notFound();

	return {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
