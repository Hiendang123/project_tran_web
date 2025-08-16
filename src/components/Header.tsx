'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo, Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { navigationItems } from '@/lib/navigation'
import { useLanguage, type Language } from '@/contexts/LanguageContext'
import flagEn from '@/images/flags/flag-en.svg'
import flagVi from '@/images/flags/flag-vi.svg'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 10l5 5 5-5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GlobeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  > & { href: string },
) {
  const { t } = useLanguage()

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only handle smooth scroll for anchor links (starting with #)
    if (href.includes('#')) {
      e.preventDefault()

      // Close the mobile menu by clicking outside (simulate)
      document.body.click()

      // Extract the section ID from href (e.g., "/#safety" -> "safety")
      const sectionId = href.split('#')[1]

      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            // Get header height dynamically after menu closes
            const header = document.querySelector('header')
            const headerHeight = header?.getBoundingClientRect().height || 0

            // Get element's position relative to document
            const elementRect = element.getBoundingClientRect()
            const elementTop = elementRect.top + window.pageYOffset

            // Calculate exact scroll position to put section top at viewport top
            // accounting for fixed header
            const scrollPosition = elementTop - headerHeight

            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth',
            })
          }
        }, 300) // Small delay to let menu close
      } else if (href === '/') {
        // Handle home link - scroll to top
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }, 300)
      }
    }
  }

  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-gray-700"
      onClick={(e) => handleSmoothScroll(e, props.href)}
      {...props}
    />
  )
}

export function Header() {
  const { t, language, setLanguage } = useLanguage()

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Find the popover button by checking for data-headlessui-state="open"
      const popoverButton = document.querySelector(
        '[data-headlessui-state="open"][aria-label="Toggle site navigation"]',
      )

      if (popoverButton) {
        // Click the button to close the menu
        ;(popoverButton as HTMLElement).click()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languageOptions = [
    {
      code: 'en' as Language,
      label: t('lang.english'),
      flag: flagEn,
    },
    {
      code: 'vi' as Language,
      label: t('lang.vietnamese'),
      flag: flagVi,
    },
  ]

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              {/* <Logo className="h-10 w-auto" /> */}
              <Logomark className="w-[120px] sm:w-[150px]" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navigationItems.map(([label, href]) => (
                              <MobileNavLink key={label} href={href}>
                                {t(label)}
                              </MobileNavLink>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <MobileNavLink href="/#contact">
                              <Button
                                variant="outline"
                                className="w-full border-[#ba1c20] text-[#ba1c20] hover:bg-[#ba1c20] hover:text-white"
                              >
                                {t('nav.contact')}
                              </Button>
                            </MobileNavLink>
                            <Menu>
                              <MenuButton className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50">
                                {(() => {
                                  const currentLang = languageOptions.find(
                                    (opt) => opt.code === language,
                                  )
                                  return currentLang ? (
                                    <Image
                                      src={currentLang.flag}
                                      alt={`${currentLang.label} flag`}
                                      width={20}
                                      height={15}
                                      className="rounded-sm"
                                    />
                                  ) : (
                                    <GlobeIcon className="h-4 w-4" />
                                  )
                                })()}
                                {t('nav.languages')}
                                <ChevronDownIcon className="h-4 w-4" />
                              </MenuButton>
                              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none">
                                {languageOptions.map((option) => (
                                  <MenuItem key={option.code}>
                                    <button
                                      onClick={() => setLanguage(option.code)}
                                      className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                                        language === option.code
                                          ? 'bg-gray-100 font-semibold'
                                          : 'text-gray-700'
                                      }`}
                                    >
                                      <Image
                                        src={option.flag}
                                        alt={`${option.label} flag`}
                                        width={16}
                                        height={12}
                                        className="rounded-sm"
                                      />
                                      {option.label}
                                    </button>
                                  </MenuItem>
                                ))}
                              </MenuItems>
                            </Menu>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Link
                href="/#contact"
                className="rounded-xl border border-[#ba1c20] px-4 py-3 font-bold text-[#ba1c20] transition-colors hover:bg-[#ba1c20] hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contact')
                  if (element) {
                    const header = document.querySelector('header')
                    const headerHeight =
                      header?.getBoundingClientRect().height || 0
                    const elementRect = element.getBoundingClientRect()
                    const elementTop = elementRect.top + window.pageYOffset
                    const scrollPosition = elementTop - headerHeight
                    window.scrollTo({
                      top: scrollPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                {t('nav.contact')}
              </Link>
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-100">
                  {(() => {
                    const currentLang = languageOptions.find(
                      (opt) => opt.code === language,
                    )
                    return currentLang ? (
                      <Image
                        src={currentLang.flag}
                        alt={`${currentLang.label} flag`}
                        width={20}
                        height={15}
                        className="rounded-sm"
                      />
                    ) : (
                      <GlobeIcon className="h-4 w-4" />
                    )
                  })()}
                  {t('nav.languages')}
                  <ChevronDownIcon className="h-4 w-4" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none">
                  {languageOptions.map((option) => (
                    <MenuItem key={option.code}>
                      <button
                        onClick={() => setLanguage(option.code)}
                        className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                          language === option.code
                            ? 'bg-gray-100 font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        <Image
                          src={option.flag}
                          alt={`${option.label} flag`}
                          width={16}
                          height={12}
                          className="rounded-sm"
                        />
                        {option.label}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
