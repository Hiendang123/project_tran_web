import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Certificate } from '@/components/Certificate'
// import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { AdvancedFeatures } from '@/components/AdvancedFeatures'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <SecondaryFeatures />
      <AdvancedFeatures />
      <PrimaryFeatures />
      <Certificate />
      <ContactForm />
      {/* <CallToAction /> */}
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      <Faqs />
    </>
  )
}
