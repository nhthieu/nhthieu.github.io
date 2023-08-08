import type { AstroGlobal } from "astro";
import type { UIDict, UIDictionaryKeys, UILanguageKeys } from "./translations-checker";

function mapDefaultExports<T>(modules: Record<string, { default: T }>) {
	const exportMap: Record<string, T> = {};
	for (const [path, module] of Object.entries(modules)) {
		const [_dot, lang] = path.split('/');
		exportMap[lang] = module.default;
	}
	return exportMap;
}

export const translations = mapDefaultExports<UIDict>(
	import.meta.glob('./*/ui.ts', { eager: true })
);

export const fallbackLang = 'en';

export function getLanguageFromURL(pathname: string) {
	// const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
	const langCodeMatch = pathname.match(/\/([a-z]{2})\/?/);
	return langCodeMatch ? langCodeMatch[1] : 'en';
}

export function useTranslations(Astro: Readonly<AstroGlobal>): (key: UIDictionaryKeys) => string {
	const lang = getLanguageFromURL(Astro.url.pathname) || 'en';
	return useTranslationsForLang(lang as UILanguageKeys);
}

export function useTranslationsForLang(lang: UILanguageKeys): (key: UIDictionaryKeys) => string {
	return function getTranslation(key: UIDictionaryKeys) {
		const str = translations[lang]?.[key] || translations[fallbackLang][key];
		if (str === undefined) throw new Error(`Missing translation for “${key}” in “${lang}”.`);
		return str;
	};
}
