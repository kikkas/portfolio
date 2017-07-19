/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data.
 *
 */
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import svLocaleData from 'react-intl/locale-data/sv'

addLocaleData(enLocaleData)
addLocaleData(svLocaleData)

export const defaultLocale = 'en'

export const appLocales = [
  'en',
  'sv'
]

export const appLanguages = {
  en: 'English',
  sv: 'Swedish',
}

import enTranslationMessages from 'translations/en.json'
import svTranslationMessages from 'translations/sv.json'

export const formatTranslationMessages = (messages) => {
  const formattedMessages = {}
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage
  }

  return formattedMessages
}

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  sv: formatTranslationMessages(svTranslationMessages),
}
