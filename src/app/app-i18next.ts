import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector  from 'i18next-browser-languagedetector';

export function appInit(i18next: ITranslationService) {
  return () => i18next
  .use(HttpApi)
  .use(LanguageDetector )
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'fr',
    debug: true,
    returnEmptyString: false,
    ns: [
      'common',         
    ],
    backend: {
      loadPath: '/locales/{{lng}}.{{ns}}.json',
    },
    detection: {
      // order and from where user language should be detected
      order: ['querystring', 'cookie'],
      // keys or params to lookup language from
      lookupCookie: 'lang',
      lookupQuerystring: 'lng',
      // cache user language on
      caches: ['localStorage', 'cookie'],
      // optional expire and domain for set cookie
      cookieMinutes: 10080, // 7 days
    }
  });
}
  
export function localeIdFactory(i18next: ITranslationService)  {
  return i18next.language;
}
  
export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }
];
