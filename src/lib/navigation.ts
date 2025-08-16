export const navigationItems = [
  ['nav.home', '/'],
  ['nav.safety', '/#safety'],
  ['nav.features', '/#features'],
  ['nav.certificates', '/#certificates'],
  ['nav.faqs', '/#faqs'],
] as const

export type NavigationItem = typeof navigationItems[number]
