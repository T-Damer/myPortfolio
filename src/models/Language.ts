enum Language {
  en = 'en',
  ru = 'ru',
}

export function flagForLanguage(language: Language) {
  switch (language) {
    case Language.en:
      return 'EN'
    case Language.ru:
      return 'RU'
  }
}

export default Language
