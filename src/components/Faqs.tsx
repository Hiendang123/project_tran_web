'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'

export function Faqs() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Get FAQs from translations
  const faqs = Array.from({ length: 12 }, (_, index) => ({
    question: t(`faqs.questions.${index}.question`),
    answer: t(`faqs.questions.${index}.answer`),
  }))

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            {t('faqs.title')}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            {t('faqs.subtitle')}{' '}
            <a
              href="mailto:jointran272@gmail.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:max-w-none md:grid-cols-2 lg:grid-cols-3"
        >
          {faqs.map((faq, faqIndex) => (
            <li key={faqIndex}>
              {/* Mobile accordion button */}
              <button
                onClick={() => toggleFaq(faqIndex)}
                className="w-full text-left md:pointer-events-none md:cursor-default"
              >
                <div className="flex items-center justify-between md:block">
                  <h3 className="text-lg/6 font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {/* Plus/Minus icon for mobile only */}
                  <div className="ml-4 flex-shrink-0 md:hidden">
                    <svg
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                        openFaq === faqIndex ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer - hidden on mobile unless open, always visible on tablet+ */}
              <div
                className={`mt-4 md:block ${openFaq === faqIndex ? 'block' : 'hidden'}`}
              >
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
