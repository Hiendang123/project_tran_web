'use client'

import { Tab, TabGroup, TabList } from '@headlessui/react'
import { motion } from 'framer-motion'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { useLanguage } from '@/contexts/LanguageContext'

import Image from 'next/image'
import aptomatWifi from '@/images/aptomat-wifi.png'

function flugIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path
        fill="#ba1c20"
        d="M224 32C241.7 32 256 46.3 256 64L256 160L384 160L384 64C384 46.3 398.3 32 416 32C433.7 32 448 46.3 448 64L448 160L512 160C529.7 160 544 174.3 544 192C544 209.7 529.7 224 512 224L512 288C512 383.1 442.8 462.1 352 477.3L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 477.3C197.2 462.1 128 383.1 128 288L128 224C110.3 224 96 209.7 96 192C96 174.3 110.3 160 128 160L192 160L192 64C192 46.3 206.3 32 224 32z"
      />
    </svg>
  )
}

function fireIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path
        fill="#ba1c20"
        d="M256.5 37.6C265.8 29.8 279.5 30.1 288.4 38.5C300.7 50.1 311.7 62.9 322.3 75.9C335.8 92.4 352 114.2 367.6 140.1C372.8 133.3 377.6 127.3 381.8 122.2C382.9 120.9 384 119.5 385.1 118.1C393 108.3 402.8 96 415.9 96C429.3 96 438.7 107.9 446.7 118.1C448 119.8 449.3 121.4 450.6 122.9C460.9 135.3 474.6 153.2 488.3 175.3C515.5 219.2 543.9 281.7 543.9 351.9C543.9 475.6 443.6 575.9 319.9 575.9C196.2 575.9 96 475.7 96 352C96 260.9 137.1 182 176.5 127C196.4 99.3 216.2 77.1 231.1 61.9C239.3 53.5 247.6 45.2 256.6 37.7zM321.7 480C347 480 369.4 473 390.5 459C432.6 429.6 443.9 370.8 418.6 324.6C414.1 315.6 402.6 315 396.1 322.6L370.9 351.9C364.3 359.5 352.4 359.3 346.2 351.4C328.9 329.3 297.1 289 280.9 268.4C275.5 261.5 265.7 260.4 259.4 266.5C241.1 284.3 207.9 323.3 207.9 370.8C207.9 439.4 258.5 480 321.6 480z"
      />
    </svg>
  )
}

function waterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path
        fill="#ba1c20"
        d="M474.6 188.1C495.3 203.7 520.6 218.8 548.8 222.6C561.9 224.4 574 215.1 575.8 202C577.6 188.9 568.3 176.8 555.2 175C539.3 172.9 522 163.7 503.5 149.8C465.1 120.8 413 120.8 374.5 149.8C350.5 167.9 333.8 176.1 320 176.1C306.2 176.1 289.5 167.9 265.5 149.8C227.1 120.8 175 120.8 136.5 149.8C118 163.7 100.7 172.9 84.8 175C71.7 176.8 62.4 188.8 64.2 202C66 215.2 78 224.4 91.2 222.6C119.4 218.8 144.8 203.7 165.4 188.1C186.7 172 215.3 172 236.6 188.1C260.8 206.4 288.9 224 320 224C351.1 224 379.1 206.3 403.4 188.1C424.7 172 453.3 172 474.6 188.1zM474.6 332.1C495.3 347.7 520.6 362.8 548.8 366.6C561.9 368.4 574 359.1 575.8 346C577.6 332.9 568.3 320.8 555.2 319C539.3 316.9 522 307.7 503.5 293.8C465.1 264.8 413 264.8 374.5 293.8C350.5 311.9 333.8 320.1 320 320.1C306.2 320.1 289.5 311.9 265.5 293.8C227.1 264.8 175 264.8 136.5 293.8C118 307.7 100.7 316.9 84.8 319C71.7 320.7 62.4 332.8 64.2 346C66 359.2 78 368.4 91.2 366.6C119.4 362.8 144.8 347.7 165.4 332.1C186.7 316 215.3 316 236.6 332.1C260.8 350.4 288.9 368 320 368C351.1 368 379.1 350.3 403.4 332.1C424.7 316 453.3 316 474.6 332.1zM403.4 476.1C424.7 460 453.3 460 474.6 476.1C495.3 491.7 520.6 506.8 548.8 510.6C561.9 512.4 574 503.1 575.8 490C577.6 476.9 568.3 464.8 555.2 463C539.3 460.9 522 451.7 503.5 437.8C465.1 408.8 413 408.8 374.5 437.8C350.5 455.9 333.8 464.1 320 464.1C306.2 464.1 289.5 455.9 265.5 437.8C227.1 408.8 175 408.8 136.5 437.8C118 451.7 100.7 460.9 84.8 463C71.7 464.8 62.4 476.8 64.2 490C66 503.2 78 512.4 91.2 510.6C119.4 506.8 144.8 491.7 165.4 476.1C186.7 460 215.3 460 236.6 476.1C260.8 494.4 288.9 512 320 512C351.1 512 379.1 494.3 403.4 476.1z"
      />
    </svg>
  )
}

function accidentIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path
        fill="#ba1c20"
        d="M384 96C384 78.3 369.7 64 352 64C334.3 64 320 78.3 320 96L320 101.4C320 146.4 296.4 188 257.9 211.2L253.3 214C195.4 248.7 160 311.1 160 378.6L160 448C160 465.7 174.3 480 192 480C209.7 480 224 465.7 224 448L224 378.6C224 361.9 227.3 345.6 233.4 330.6L423.2 564.2C434.3 577.9 454.5 580 468.2 568.9C481.9 557.8 484 537.6 472.9 523.9L359.2 384L464 384L502.4 435.2C513 449.3 533.1 452.2 547.2 441.6C561.3 431 564.2 410.9 553.6 396.8L510.4 339.2C501.3 327.1 487.1 320 472 320L383 320L320.1 244.5C360.4 208.5 384 156.6 384 101.4L384 96zM168 208C198.9 208 224 182.9 224 152C224 121.1 198.9 96 168 96C137.1 96 112 121.1 112 152C112 182.9 137.1 208 168 208z"
      />
    </svg>
  )
}

function FeaturesDesktop({ featureContent }: { featureContent: any }) {
  return (
    <TabGroup
      className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center lg:gap-16 xl:gap-24"
      vertical
    >
      <TabList className="relative z-10 order-first space-y-4 md:col-span-6 md:space-y-6">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          {featureContent.itemTitle}
        </h2>
        {featureContent.item.map((feature: any, featureIndex: number) => (
          <div
            key={feature.name}
            className="transition-color relative rounded-2xl bg-white shadow-md shadow-gray-900/5"
          >
            <div className="relative z-10 p-4 md:p-6 lg:p-8">
              <div className="flex items-center gap-3 md:gap-4">
                <feature.icon className="h-6 w-6 flex-shrink-0 md:h-8 md:w-8" />
                <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                  <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </Tab>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative order-first md:order-last md:col-span-6">
        {/* Desktop/Tablet Image with CircleBackground */}
        <div className="relative">
          <Image
            className="absolute top-1/2 left-1/2 z-10 max-w-[450px] -translate-x-1/2 -translate-y-1/2 lg:max-w-[600px]"
            src={aptomatWifi}
            alt="Smart Circuit Breaker"
          />
          <div className="relative mx-auto aspect-square w-full max-w-[400px] lg:max-w-[560px]">
            <CircleBackground color="#ba1c20" className="animate-spin-slower" />
          </div>
        </div>

        {/* Mobile Image */}
        {/* <div className="mx-auto max-w-[280px] md:hidden">
          <Image 
            src={aptomatWifi} 
            alt="Smart Circuit Breaker"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </TabGroup>
  )
}

export function AdvancedFeatures() {
  const { t } = useLanguage()

  // Create features array from translations
  const features = [
    {
      name: t('advancedFeatures.features.0.name'),
      description: t('advancedFeatures.features.0.description'),
      icon: flugIcon,
    },
    {
      name: t('advancedFeatures.features.1.name'),
      description: t('advancedFeatures.features.1.description'),
      icon: fireIcon,
    },
    {
      name: t('advancedFeatures.features.2.name'),
      description: t('advancedFeatures.features.2.description'),
      icon: waterIcon,
    },
    {
      name: t('advancedFeatures.features.3.name'),
      description: t('advancedFeatures.features.3.description'),
      icon: accidentIcon,
    },
  ]

  const featureContent = {
    title: t('advancedFeatures.title'),
    description: t('advancedFeatures.description'),
    itemTitle: t('advancedFeatures.itemTitle'),
    item: features,
  }

  return (
    <section
      id="safety"
      aria-label={featureContent.title}
      className="py-16 sm:py-20 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
            {featureContent.title}
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg lg:text-xl">
            {featureContent.description}
          </p>
        </div>
      </Container>
      <Container className="mt-12 md:mt-20">
        <FeaturesDesktop featureContent={featureContent} />
      </Container>
    </section>
  )
}
