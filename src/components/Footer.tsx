'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function AddressIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#525252" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#525252" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function EmailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#525252" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function FooterNavLinks() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only handle smooth scroll for anchor links (starting with #)
    if (href.includes('#')) {
      e.preventDefault()

      // Extract the section ID from href (e.g., "/#safety" -> "safety")
      const sectionId = href.split('#')[1]

      if (sectionId) {
        const element = document.getElementById(sectionId)
        if (element) {
          // Get header height dynamically
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
      } else if (href === '/') {
        // Handle home link - scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
  }

  const navItems = [
    ['Home', '/'],
    ['Safety', '/#safety'],
    ['Features', '/#features'],
    ['Certificates', '/#certificates'],
    ['FAQs', '/#faqs'],
  ]

  return (
    <nav className="flex flex-row space-x-4">
      {navItems.map(([label, href]) => (
        <Link
          key={label}
          href={href}
          onClick={(e) => handleSmoothScroll(e, href)}
          className="font-bold text-gray-600 transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

const footerText = {
  title: 'TRAN',
  description: 'Safety for your Home',
  address:
    'E10/1B Thới Hoà, Vinh Lộc A, Bình Chánh, TP Hồ Chí Minh, Ho Chi Minh City, Vietnam',
  phone: '091 749 28 28',
  email: 'Jointran272@gmail.com',
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-start lg:py-16">
          <div className="lex-col flex items-center lg:flex-row lg:gap-16 xl:gap-24">
            {/* Logo and Contact Info */}
            <div className="flex items-center text-gray-900">
              <Logomark className="w-[300px] flex-none fill-cyan-500" />
            </div>

            {/* Navigation Links */}
            <div className="mt-8 lg:mt-0">
              <FooterNavLinks />

              <nav className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <AddressIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />
                  <p className="text-sm leading-relaxed text-gray-600">
                    {footerText.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                  <a
                    href={`tel:${footerText.phone}`}
                    className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
                  >
                    {footerText.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <EmailIcon className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                  <a
                    href={`mailto:${footerText.email}`}
                    className="text-sm text-gray-600 transition-colors hover:text-cyan-600"
                  >
                    {footerText.email}
                  </a>
                </div>
              </nav>
            </div>
          </div>
          {/* <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex items-center border-t border-gray-200 pt-8 pb-12 md:justify-between md:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form> */}
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
