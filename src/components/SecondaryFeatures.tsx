'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

// Import tất cả ảnh
import bankImage from '@/images/bank.jpg'
import residentialImage from '@/images/residential-area.jpg'
import buildingImage from '@/images/building.jpg'
import gasStationImage from '@/images/gas-station.jpg'
import hotelImage from '@/images/hotel.jpg'
import airportImage from '@/images/airport.jpg'
import farmImage from '@/images/farm.jpg'
import energyStationImage from '@/images/energy-station.jpg'
import schoolImage from '@/images/school.jpg'
import chargingImage from '@/images/charging-electric-cars-at-home.jpg'

const industries = [
  {
    name: 'Banks',
    englishName: 'Financial Institutions',
    bgImage: bankImage,
    overlay: 'from-blue-900/80 to-gray-900/80',
  },
  {
    name: 'Residential areas',
    englishName: 'Housing Communities',
    bgImage: residentialImage,
    overlay: 'from-gray-800/80 to-blue-800/80',
  },
  {
    name: 'Offices – High-rise buildings',
    englishName: 'Commercial Buildings',
    bgImage: buildingImage,
    overlay: 'from-orange-600/80 to-yellow-500/80',
  },
  {
    name: 'Petrol stations',
    englishName: 'Fuel Stations',
    bgImage: gasStationImage,
    overlay: 'from-red-600/80 to-orange-500/80',
  },
  {
    name: 'Hotels, Restaurants',
    englishName: 'Hospitality Industry',
    bgImage: hotelImage,
    overlay: 'from-purple-600/80 to-pink-500/80',
  },
  {
    name: 'Airports',
    englishName: 'Aviation Facilities',
    bgImage: airportImage,
    overlay: 'from-indigo-600/80 to-blue-500/80',
  },
  {
    name: 'Farm',
    englishName: 'Farming',
    bgImage: farmImage,
    overlay: 'from-green-600/80 to-teal-500/80',
  },
  {
    name: 'Power stations',
    englishName: 'Energy Plants',
    bgImage: energyStationImage,
    overlay: 'from-yellow-600/80 to-orange-500/80',
  },
  {
    name: 'Schools',
    englishName: 'Educational Institutions',
    bgImage: schoolImage,
    overlay: 'from-blue-600/80 to-indigo-500/80',
  },
  {
    name: 'Charging electric cars at home',
    englishName: 'Home EV Charging',
    bgImage: chargingImage,
    overlay: 'from-green-700/80 to-emerald-500/80',
  },
]

export function SecondaryFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(true)

  const itemsPerPage = 6
  const slideWidthPercent = 100 / itemsPerPage

  const extendedIndustries = [
    ...industries,
    ...industries.slice(0, itemsPerPage),
  ]

  const nextSlide = () => {
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= industries.length) return 1
      return prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setIsAnimating(false)
        const jumpIndex = industries.length
        setTimeout(() => {
          setIsAnimating(true)
          setCurrentIndex(industries.length - 1)
        }, 20)
        return jumpIndex
      }
      setIsAnimating(true)
      return prevIndex - 1
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setIsAnimating(true)
        setCurrentIndex((prev) => {
          if (prev >= industries.length) return 1
          return prev + 1
        })
      }
    }, 3000)
    return () => clearInterval(intervalId)
  }, [isPaused])

  return (
    <section
      id="secondary-features"
      aria-label="Industry applications"
      className="relative bg-white"
    >
      <div
        className="relative h-[500px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex h-full ${isAnimating ? 'transition-transform duration-700 ease-out' : 'transition-none'}`}
          style={{
            transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
          }}
          onTransitionEnd={() => {
            if (currentIndex >= industries.length) {
              setIsAnimating(false)
              setCurrentIndex(0)
              setTimeout(() => setIsAnimating(true), 20)
            }
          }}
        >
          {extendedIndustries.map((industry, index) => (
            <div
              key={`${industry.name}-${index}`}
              className="group relative h-full shrink-0 basis-1/6 cursor-pointer overflow-hidden"
            >
              <Image
                src={industry.bgImage}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                <h3 className="mb-2 text-lg leading-tight font-semibold">
                  {industry.name}
                </h3>
                <p className="text-sm opacity-90">{industry.englishName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {industries.map((_, index) => {
          const activeIndex = currentIndex % industries.length
          return (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setCurrentIndex(index)
              }}
              className={`h-1 w-4 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </section>
  )
}
