import { EN } from './en';
import { DE } from './de';

export type Language = 'en' | 'de';
export type Translations = typeof EN;

const translations: Record<Language, Translations> = {
  en: EN,
  de: DE
};

export function useTranslations(lang: Language): Translations {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return 'de';
}

export const languages: Record<Language, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' }
};
