'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

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

  return [
    ['Home', '/'],
    ['Safety', '/#safety'],
    ['Features', '/#features'],
    ['Certificates', '/#certificates'],
    ['FAQs', '/#faqs'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-xl font-bold text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      onClick={(e) => handleSmoothScroll(e, href)}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
