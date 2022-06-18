import messages from "../locales/index";
export default {
  locale: 'en',
  seo: true,
  defaultLocale: 'en',
  strategy: 'prefix',
  baseUrl: 'https://sevenhillsagro.com',
  locales: [
    {
      code: 'ar',
      name: 'Arabic',
      iso: 'ar-AR'
    },
    {
      code: 'ch',
      name: 'Chinese',
      iso: 'ch-CH'
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US'
    }, {
      code: 'ru',
      name: 'Russian',
      iso: 'ru-RU'
    }, {
      code: 'tu',
      name: 'Turkish',
      iso: 'tu-TU'
    }],
  vueI18n: {
    fallbackLocale: 'en',
    messages: messages,
    silentTranslationWarn: false
  }
}


