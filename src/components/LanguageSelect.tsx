import type { ChangeEvent } from 'preact/compat';
import languages from '@/i18n/languages';

const LanguageSelect = ({ lang }: { lang: string; }) => {
	return (
		<select
			className="ml-2 h-8 flex-1 px-2 text-baseLight dark:text-baseDark bg-primaryLight dark:bg-primaryDark rounded-md hover:cursor-pointer hover:opacity-75"
			value={lang}
			onChange={(e: ChangeEvent<HTMLSelectElement>) => {
				const newLang = e.currentTarget.value;
				const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split('/');
				const slug = rest.join('/');
				window.location.pathname = `/${newLang}/${slug}`;
			}}
		>
			{Object.entries(languages).map(([code, name]) => (
				<option key={name} value={code}>
					<span>{name}</span>
				</option>
			))}
		</select>
	);
};

export default LanguageSelect;
