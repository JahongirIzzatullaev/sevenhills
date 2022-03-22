import ar from './ar'
import ch from './ch'
import en from './en'
import ru from './ru'
import tu from './tu'

const messages = {
  ar, ch, en, ru, tu
};

export default {
  locale: 'en',
  seo: true,
  defaultLocale: 'en',
  strategy: 'no_prefix',
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


