import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Mesa Dental",
    tagline: "Smile Confidently. Live Freely.",
    phone: "(480) 396-9900",
    phoneHref: "tel:+14803969900",
    email: "info@mesadental.com",
    address: "123 Smile Ave",
    city: "Mesa",
    serviceAreas: ["Mesa, AZ", "Gilbert, AZ", "Chandler, AZ", "Tempe, AZ"],
    license: "AZ Dental Board #12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Dental Implants", desc: "Restore your smile and confidence with durable, natural-looking dental implants.", urgent: false },
    { icon: "heart", title: "Dentures", desc: "Custom-fitted dentures provide comfort and functionality for a complete smile.", urgent: false },
    { icon: "clock", title: "Emergency Dentistry", desc: "Immediate care for dental emergencies to relieve pain and address urgent issues.", urgent: true },
    { icon: "sparkles", title: "Invisalign", desc: "Achieve a straighter smile discreetly with clear, comfortable Invisalign aligners.", urgent: false },
    { icon: "thermometer", title: "Dental Cleaning", desc: "Maintain optimal oral health with professional cleanings and preventative care.", urgent: false },
    { icon: "scissors", title: "Teeth Whitening", desc: "Brighten your smile several shades with our safe and effective teeth whitening treatments.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Mesa, AZ", stars: 5, text: "I had a dental emergency last month, and Mesa Dental got me in the same day. Dr. Smith was incredibly kind and professional, explaining everything clearly. The pain was gone, and I felt so much relief. Highly recommend their compassionate and efficient service!" },
    { name: "Mark T.", location: "Gilbert, AZ", stars: 5, text: "Getting my Invisalign here was the best decision. The team made the whole process easy and comfortable. My teeth look amazing, and I feel so much more confident. They truly focus on your goals and make you feel like a partner in your journey." },
    { name: "Jessica P.", location: "Chandler, AZ", stars: 5, text: "I've been coming to Mesa Dental for years for my regular cleanings. The staff is always friendly, and the hygienists are thorough yet gentle. They use advanced technology, and I always leave feeling like my teeth are sparkling clean and healthy. A truly wonderful dental experience every time." }
  ],

  trustBadges: [
    "ADA Member", "Same-Day Emergency Care", "5-Star Rated", "Advanced Technology", "Personalized Care"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Smiles", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We offer same-day appointments for dental emergencies to address your needs quickly." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden fees, so you know what to expect." },
    { icon: "award", title: "Certified Professionals", desc: "Our team consists of highly trained and certified dental experts dedicated to your care." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your comfort and satisfaction are our top priorities; we strive for excellent results." },
    { icon: "phone", title: "Easy Scheduling", desc: "Convenient online and phone scheduling to fit your busy lifestyle." },
    { icon: "shield-check", title: "Advanced Technology", desc: "Utilizing the latest dental technology for precise diagnoses and effective treatments." }
  ],

  formServiceOptions: ["Dental Implants", "Dentures", "Emergency Dentistry", "Invisalign", "Dental Cleaning", "Braces and clear aligners", "Dental Veneers", "Teeth Whitening"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!