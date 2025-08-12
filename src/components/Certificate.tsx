'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'

// Import certificate images
import certificateHT from '@/images/certificate/certificate-CN-HT.png'
import certificateKNM from '@/images/certificate/certificate-CN-KNM.png'
import certificateSTC from '@/images/certificate/certificate-CN-STC.png'
import certificateSUN from '@/images/certificate/certificate-CN-SUN.png'

const certificates = [
  {
    id: 'ht',
    name: 'Certificate CN-HT',
    image: certificateHT,
    alt: 'Certificate CN-HT',
  },
  {
    id: 'knm',
    name: 'Certificate CN-KNM',
    image: certificateKNM,
    alt: 'Certificate CN-KNM',
  },
  {
    id: 'stc',
    name: 'Certificate CN-STC',
    image: certificateSTC,
    alt: 'Certificate CN-STC',
  },
  {
    id: 'sun',
    name: 'Certificate CN-SUN',
    image: certificateSUN,
    alt: 'Certificate CN-SUN',
  },
]

export function Certificate() {
  return (
    <section
      id="certificate"
      aria-labelledby="certificate-title"
      className="bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="certificate-title"
            className="text-3xl font-medium tracking-tight text-red-600"
          >
            CERTIFICATES
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Committed to providing genuine, high-quality products
          </p>
        </div>

        {/* Grid layout 1 horizontal row */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  className="h-auto w-full rounded-lg object-contain shadow-lg"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
