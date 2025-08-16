import type { Language } from '@/contexts/LanguageContext'

// Import JSON files
import enTranslations from '@/locales/en.json'
import viTranslations from '@/locales/vi.json'

export type TranslationKey = string

const translations = {
  en: enTranslations,
  vi: viTranslations,
} as const

// Helper function to get nested value from object using dot notation
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined
  }, obj)
}

export const getTranslation = (language: Language, key: TranslationKey): string => {
  const langTranslations = translations[language]
  const enTranslations = translations.en
  
  // Try to get translation in current language
  let translation = getNestedValue(langTranslations, key)
  
  // Fallback to English if not found
  if (!translation) {
    translation = getNestedValue(enTranslations, key)
  }
  
  // Return key if no translation found
  return translation || key
}

export const loadTranslations = async (language: Language) => {
  // Since we're importing JSON directly, we can return immediately
  return translations[language]
}
