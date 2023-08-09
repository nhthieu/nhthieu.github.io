import type { ChangeEvent } from 'preact/compat';
import languages from '@/i18n/languages';

const LanguageSelect = ({ lang }: { lang: string; }) => {
	return (
		<select
			className="mr-2 h-8 flex-1 px-2 py-1 text-textLight dark:text-textDark border border-baseDark/30 dark:border-baseLight/50 rounded-md bg-baseLight dark:bg-baseDark hover:cursor-pointer hover:border-baseDark dark:hover:border-baseLight"
			value={lang}
			onChange={(e: ChangeEvent<HTMLSelectElement>) => {
				const newLang = e.currentTarget.value;
				const [_leadingSlash, _oldLang, ...rest] = window.location.pathname.split('/');
				const slug = rest.join('/');
				window.location.pathname = `/${newLang}/${slug}`;
			}}
		>
			{Object.entries(languages).map(([code, name]) => (
				<option key={name} value={code} className="border">
					<span>{name}</span>
				</option>
			))}
		</select>
	);
};

export default LanguageSelect;
