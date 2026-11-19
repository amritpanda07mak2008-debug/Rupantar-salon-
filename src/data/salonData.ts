/**
 * RUPANTAR BEAUTY SALON & AESTHETIC CENTRE — EDITABLE BUSINESS CONFIGURATION
 * -------------------------------------------------------------------------
 * Update business contact details, opening hours, indicative starting prices,
 * packages, or verified review placeholders below.
 */

export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  category: 'Hair' | 'Skin' | 'Makeup' | 'Nails & Finishing';
  description: string;
  indicativePrice: number;
  priceUnit?: string;
  duration: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface PriceMenuItem {
  id: string;
  name: string;
  detail: string;
  indicativePrice: number;
}

export interface PriceMenuCategory {
  id: 'Hair' | 'Skin' | 'Makeup' | 'Nails' | 'Beauty Packages';
  title: string;
  subtitle: string;
  items: PriceMenuItem[];
}

export interface BeautyPackage {
  id: string;
  name: string;
  tagline: string;
  indicativePrice: number;
  duration: string;
  inclusions: string[];
  featured?: boolean;
}

export interface TransformationExample {
  id: string;
  title: string;
  category: string;
  note: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Bridal & Occasion' | 'Hair Artistry' | 'Skin & Spa' | 'Studio & Nails';
  src: string;
  alt: string;
  aspectClass: string;
}

export interface ReviewPlaceholder {
  id: string;
  slotLabel: string;
  serviceTag: string;
  verifiedStars: number;
  placeholderNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/* =========================================================================
 * 1. VERIFIED BUSINESS INFORMATION (EDITABLE)
 * ========================================================================= */
export const SALON_INFO = {
  brandShort: 'Rupantar',
  brandFull: 'Rupantar Beauty Salon & Aesthetic Centre',
  category: 'Ladies Beauty Parlour & Aesthetic Centre',
  whatsappDigits: '917008735414',
  phoneDisplay: '+91 70087 35414',
  phoneHref: 'tel:+917008735414',
  addressLine1: 'Hotel Blue, Vine Street, Near Salandi Guest House',
  addressLine2: 'In Front of SBI ATM, Bankashi',
  cityStatePin: 'Bhadrak, Odisha 756100, India',
  fullAddress:
    'Rupantar Beauty Salon, Hotel Blue, Vine Street, Near Salandi Guest House, In Front of SBI ATM, Bankashi, Bhadrak, Odisha 756100, India',
  mapsQueryUrl:
    'https://www.google.com/maps/search/?api=1&query=Rupantar+Beauty+Salon+Hotel+Blue+Vine+Street+Bankashi+Bhadrak+Odisha+756100',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Bankashi,+Bhadrak,+Odisha+756100&t=&z=15&ie=UTF8&iwloc=&output=embed',
  // Editable Opening Hours Placeholder — replace with confirmed salon schedule
  editableHours: '[Editable Salon Hours — Confirm via WhatsApp before visiting]',
  // Editable Instagram Handle Placeholder
  instagramPlaceholderUrl: '#location',
  instagramHandleLabel: '@rupantar.bhadrak (Add verified Instagram link)',
  reviews: {
    totalReviews: 241,
    fiveStarRatings: 200,
  },
} as const;

/* =========================================================================
 * 2. GENERATED BEAUTY PHOTOGRAPHY ASSETS
 * ========================================================================= */
export const SALON_IMAGES = {
  heroEditorial: '/src/assets/images/hero_bridal_editorial_1794838788074.jpg',
  salonInterior: '/src/assets/images/salon_luxury_interior_1794838782476.jpg',
  hairStyling: '/src/assets/images/service_hair_styling_1794838793064.jpg',
  hairSpa: '/src/assets/images/service_hair_spa_1794838784388.jpg',
  hairColour: '/src/assets/images/service_hair_colour_1794838784241.jpg',
  bridalMakeup: '/src/assets/images/service_bridal_makeup_1794838785284.jpg',
  partyMakeup: '/src/assets/images/service_party_makeup_1794838786152.jpg',
  facialSkincare: '/src/assets/images/service_facial_skincare_1794838786074.jpg',
  manicurePedicure: '/src/assets/images/service_manicure_pedicure_1794838784862.jpg',
  sareeDraping: '/src/assets/images/service_saree_draping_1794838786551.jpg',
  transformHairBefore: '/src/assets/images/transform_hair_before_1794838784669.jpg',
  transformHairAfter: '/src/assets/images/transform_hair_after_1794838787495.jpg',
  transformMakeupBefore: '/src/assets/images/transform_makeup_before_1794838788529.jpg',
  transformMakeupAfter: '/src/assets/images/transform_makeup_after_1794838788360.jpg',
} as const;

/* =========================================================================
 * 3. SERVICES CATALOG (EDITABLE INDICATIVE STARTING PRICES IN INR)
 * ========================================================================= */
export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'haircut-styling',
    index: '01',
    name: 'Haircut & Hair Styling',
    category: 'Hair',
    description:
      'Precision layered cuts, curtain bangs, feather trims, and polished salon blowouts tailored to your face structure.',
    indicativePrice: 199,
    duration: '45 mins',
    image: SALON_IMAGES.hairStyling,
    imageAlt: 'Glossy layered haircut and voluminous blowout styling at Rupantar Beauty Salon Bhadrak',
  },
  {
    id: 'hair-spa',
    index: '02',
    name: 'Hair Spa & Hair Treatments',
    category: 'Hair',
    description:
      'Restorative botanical oil massage, deep-conditioning steam mask, and frizz-calming scalp rituals for softer hair.',
    indicativePrice: 499,
    duration: '60 mins',
    image: SALON_IMAGES.hairSpa,
    imageAlt: 'Luxury botanical hair spa treatment and scalp ritual in Bhadrak',
  },
  {
    id: 'hair-colouring',
    index: '03',
    name: 'Hair Colouring & Highlights',
    category: 'Hair',
    description:
      'Seamless root touch-ups, rich global hues, caramel balayage, and soft dimension blended with care.',
    indicativePrice: 999,
    duration: '90–150 mins',
    image: SALON_IMAGES.hairColour,
    imageAlt: 'Dimensional caramel balayage and hair highlights styling',
  },
  {
    id: 'bridal-makeup',
    index: '04',
    name: 'Bridal Makeup',
    category: 'Makeup',
    description:
      'Bespoke bridal artistry with skin-prep hydration, long-wear luminous base, traditional eye framing, and veil setting.',
    indicativePrice: 4999,
    duration: '150–180 mins',
    image: SALON_IMAGES.bridalMakeup,
    imageAlt: 'Regal Indian bridal makeup and traditional jewellery styling in Bhadrak',
  },
  {
    id: 'party-makeup',
    index: '05',
    name: 'Party Makeup',
    category: 'Makeup',
    description:
      'Refined reception, engagement, and festive makeup featuring breathable radiance, soft-glam eyes, and hair styling.',
    indicativePrice: 1499,
    duration: '75 mins',
    image: SALON_IMAGES.partyMakeup,
    imageAlt: 'Sophisticated party and evening reception makeup portrait',
  },
  {
    id: 'facial-skincare',
    index: '06',
    name: 'Facial & Skin Care',
    category: 'Skin',
    description:
      'Gentle exfoliation, lymphatic massage, and hydrating masks curated for clear, balanced, rested skin.',
    indicativePrice: 499,
    duration: '60 mins',
    image: SALON_IMAGES.facialSkincare,
    imageAlt: 'Calming aesthetic facial and rose quartz skincare treatment in Bhadrak',
  },
  {
    id: 'cleanup-detan',
    index: '07',
    name: 'Cleanup & Detan',
    category: 'Skin',
    description:
      'Targeted pore cleansing, blackhead care, and gentle sun-tan removal pack for everyday skin freshness.',
    indicativePrice: 299,
    duration: '40 mins',
    image: SALON_IMAGES.salonInterior,
    imageAlt: 'Calm skin care suite at Rupantar Beauty Salon and Aesthetic Centre',
  },
  {
    id: 'manicure-pedicure',
    index: '08',
    name: 'Manicure & Pedicure',
    category: 'Nails & Finishing',
    description:
      'Warm rose-petal soak, cuticle grooming, soothing scrub, hand-foot massage, and sheer or classic polish.',
    indicativePrice: 299,
    priceUnit: 'Manicure ₹299 · Pedicure ₹399',
    duration: '45–60 mins',
    image: SALON_IMAGES.manicurePedicure,
    imageAlt: 'Rose petal luxury manicure and nail care ritual',
  },
  {
    id: 'waxing-threading',
    index: '09',
    name: 'Waxing & Threading',
    category: 'Nails & Finishing',
    description:
      'Hygienic brow shaping, upper-lip threading, and gentle skin-soothing waxing for clean, comfortable smoothness.',
    indicativePrice: 149,
    duration: '20–45 mins',
    image: SALON_IMAGES.heroEditorial,
    imageAlt: 'Precision brow shaping and clean skin grooming at Rupantar',
    imagePosition: 'object-top',
  },
  {
    id: 'saree-draping',
    index: '10',
    name: 'Saree Draping',
    category: 'Nails & Finishing',
    description:
      'Crisp waist pleats, pin-secured pallu fall, and graceful traditional or modern silk saree styling.',
    indicativePrice: 499,
    duration: '30 mins',
    image: SALON_IMAGES.sareeDraping,
    imageAlt: 'Impeccably pleated silk saree draping and bridal finishing',
  },
];

/* =========================================================================
 * 4. PRICE MENU (ORGANIZED BY CATEGORY — EDITABLE INDICATIVE STARTING PRICES)
 * ========================================================================= */
export const INITIAL_PRICE_MENU: PriceMenuCategory[] = [
  {
    id: 'Hair',
    title: 'Hair Artistry & Care',
    subtitle: 'Indicative starting prices vary by hair length and density.',
    items: [
      { id: 'pm-haircut', name: 'Haircut & Blowout Styling', detail: 'Consultation, wash, precision cut & dry', indicativePrice: 199 },
      { id: 'pm-hairspa', name: 'Nourishing Hair Spa', detail: 'Scalp massage, botanical mask & steam', indicativePrice: 499 },
      { id: 'pm-rootcolor', name: 'Global Colour / Root Touch-Up', detail: 'Ammonia-gentle colour application', indicativePrice: 999 },
      { id: 'pm-highlights', name: 'Dimensional Highlights & Balayage', detail: 'Custom section toning & gloss finish', indicativePrice: 1999 },
    ],
  },
  {
    id: 'Skin',
    title: 'Facial & Skin Rituals',
    subtitle: 'Indicative starting prices tailored to skin sensitivity and concerns.',
    items: [
      { id: 'pm-cleanup', name: 'Deep Pore Cleanup & Detan', detail: 'Gentle steam, extraction & soothing pack', indicativePrice: 299 },
      { id: 'pm-facial', name: 'Signature Glow Facial', detail: 'Exfoliation, facial massage & hydrating mask', indicativePrice: 499 },
      { id: 'pm-brightfacial', name: 'Bridal Pre-Glow Skin Treatment', detail: 'Multi-step luminosity & barrier hydration', indicativePrice: 1199 },
      { id: 'pm-waxthread', name: 'Waxing & Precision Threading', detail: 'Eyebrows, upper lip & full/half arm care', indicativePrice: 149 },
    ],
  },
  {
    id: 'Makeup',
    title: 'Bridal & Occasion Makeup',
    subtitle: 'Indicative starting prices; final bridal quote confirmed at trial/consultation.',
    items: [
      { id: 'pm-party', name: 'Party & Festive Makeup', detail: 'Dewy finish, eye framing & basic hair styling', indicativePrice: 1499 },
      { id: 'pm-engagement', name: 'Engagement & Reception Look', detail: 'Long-wear HD finish, lashes & hairdo', indicativePrice: 2999 },
      { id: 'pm-bridal', name: 'Classic Bridal Makeup', detail: 'Full bridal face, hairdo, jewellery & veil set', indicativePrice: 4999 },
      { id: 'pm-saree', name: 'Silk Saree Draping', detail: 'Pleat pinning, pallu styling & comfort check', indicativePrice: 499 },
    ],
  },
  {
    id: 'Nails',
    title: 'Manicure & Pedicure Studio',
    subtitle: 'Indicative starting prices for hand, foot, and nail grooming.',
    items: [
      { id: 'pm-manicure', name: 'Classic Rose Manicure', detail: 'Cuticle care, scrub, hand massage & polish', indicativePrice: 299 },
      { id: 'pm-pedicure', name: 'Relaxing Spa Pedicure', detail: 'Warm soak, heel care, foot massage & polish', indicativePrice: 399 },
      { id: 'pm-nailpolish', name: 'Nail Shaping & Gloss Application', detail: 'Clean filing, buffing & shade coat', indicativePrice: 199 },
    ],
  },
  {
    id: 'Beauty Packages',
    title: 'Curated Beauty Packages',
    subtitle: 'Indicative combined package starting rates for full-session value.',
    items: [
      { id: 'pm-pkg-glow', name: 'Glow & Refresh Package', detail: 'Cleanup, detan, threading & manicure', indicativePrice: 799 },
      { id: 'pm-pkg-hair', name: 'Hair Care Package', detail: 'Haircut, nourishing hair spa & blowout', indicativePrice: 649 },
      { id: 'pm-pkg-self', name: 'Complete Self-Care Package', detail: 'Facial, hair spa, manicure, pedicure & threading', indicativePrice: 1499 },
      { id: 'pm-pkg-bridal', name: 'Bridal Beauty Package', detail: 'Pre-bridal facial, hair spa, waxing, bridal makeup & draping', indicativePrice: 6999 },
    ],
  },
];

/* =========================================================================
 * 5. SPECIAL BEAUTY PACKAGES (EDITABLE)
 * ========================================================================= */
export const INITIAL_PACKAGES: BeautyPackage[] = [
  {
    id: 'pkg-glow',
    name: 'Glow & Refresh Package',
    tagline: 'Quick Pre-Event Radiance',
    indicativePrice: 799,
    duration: 'Approx. 90 mins',
    inclusions: [
      'Deep Pore Cleanup & Detan Pack',
      'Eyebrow & Upper-Lip Threading',
      'Classic Rose Manicure & Polish',
      'Soothing Hydrating Mist Finish',
    ],
  },
  {
    id: 'pkg-hair',
    name: 'Hair Care Package',
    tagline: 'Softness, Volume & Shine',
    indicativePrice: 649,
    duration: 'Approx. 105 mins',
    inclusions: [
      'Custom Consultation & Haircut',
      'Botanical Oil Hair Spa & Steam',
      'Scalp & Neck Relaxation Massage',
      'Smooth Blowout Styling',
    ],
  },
  {
    id: 'pkg-bridal',
    name: 'Bridal Beauty Package',
    tagline: 'Complete Wedding-Day Elegance',
    indicativePrice: 6999,
    duration: 'Pre-Bridal + Wedding Day',
    featured: true,
    inclusions: [
      'Signature Pre-Bridal Glow Facial & Cleanup',
      'Nourishing Hair Spa & Full-Body Waxing',
      'Classic Bridal Makeup & Traditional Hairdo',
      'Silk Saree / Dupatta Draping & Jewellery Pinning',
    ],
  },
  {
    id: 'pkg-selfcare',
    name: 'Complete Self-Care Package',
    tagline: 'Head-to-Toe Restorative Day',
    indicativePrice: 1499,
    duration: 'Approx. 3 hours',
    inclusions: [
      'Signature Glow Facial & Detan Care',
      'Deep Conditioning Hair Spa',
      'Classic Manicure & Spa Pedicure',
      'Precision Brow Threading',
    ],
  },
];

/* =========================================================================
 * 6. BEFORE & AFTER TRANSFORMATION SLIDER (AI-GENERATED ILLUSTRATIVE EXAMPLES)
 * ========================================================================= */
export const TRANSFORMATIONS: TransformationExample[] = [
  {
    id: 'hair-smoothing',
    title: 'Hair Spa & Smooth Blowout',
    category: 'Hair Care · Illustrative AI Visual',
    note: 'Illustrative AI-generated comparison demonstrating how smoothing care and blowout finishing tame frizz and restore surface shine. Individual hair outcomes vary.',
    beforeImage: SALON_IMAGES.transformHairBefore,
    afterImage: SALON_IMAGES.transformHairAfter,
    beforeAlt: 'Illustrative AI before photo showing dry, frizzy wavy dark hair',
    afterAlt: 'Illustrative AI after photo showing smooth, glossy salon-finished dark hair',
  },
  {
    id: 'hair-colour',
    title: 'Caramel Balayage & Dimension',
    category: 'Hair Colour · Illustrative AI Visual',
    note: 'Illustrative AI-generated comparison showing warm caramel ribbon highlights paired with soft curls. Final tone depends on hair history and salon strand test.',
    beforeImage: SALON_IMAGES.transformHairBefore,
    afterImage: SALON_IMAGES.hairColour,
    beforeAlt: 'Illustrative AI before photo of natural uncoloured dark hair',
    afterAlt: 'Illustrative AI after photo of warm caramel balayage highlights and curls',
  },
  {
    id: 'occasion-makeup',
    title: 'Soft-Glam Occasion Makeup',
    category: 'Makeup Artistry · Illustrative AI Visual',
    note: 'Illustrative AI-generated comparison highlighting balanced complexion prep, subtle eye definition, and satin lip colour tailored for evening events.',
    beforeImage: SALON_IMAGES.transformMakeupBefore,
    afterImage: SALON_IMAGES.transformMakeupAfter,
    beforeAlt: 'Illustrative AI before portrait with bare natural skin',
    afterAlt: 'Illustrative AI after portrait with soft-glam occasion makeup and blowout',
  },
];

/* =========================================================================
 * 7. MASONRY BEAUTY GALLERY (AI-GENERATED EDITORIAL VISUALS)
 * ========================================================================= */
export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Luminous Bridal Editorial',
    category: 'Bridal & Occasion',
    src: SALON_IMAGES.heroEditorial,
    alt: 'Editorial portrait of luminous Indian bridal beauty and champagne silk styling',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'gal-2',
    title: 'Rupantar Bankashi Studio',
    category: 'Studio & Nails',
    src: SALON_IMAGES.salonInterior,
    alt: 'Serene luxury ladies salon interior with arched brass mirrors and velvet chairs',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'gal-3',
    title: 'Traditional Bridal Artistry',
    category: 'Bridal & Occasion',
    src: SALON_IMAGES.bridalMakeup,
    alt: 'Regal Indian bridal makeup with gold matha patti and burgundy silk veil',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Caramel Dimension & Waves',
    category: 'Hair Artistry',
    src: SALON_IMAGES.hairColour,
    alt: 'Rich caramel highlights and soft curls created in studio lighting',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Rose Quartz Facial Ritual',
    category: 'Skin & Spa',
    src: SALON_IMAGES.facialSkincare,
    alt: 'Calming aesthetic skincare facial massage with rose quartz roller',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-6',
    title: 'Botanical Hair Spa Care',
    category: 'Hair Artistry',
    src: SALON_IMAGES.hairSpa,
    alt: 'Warm botanical oil hair spa ritual with steamed cotton towels',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-7',
    title: 'Evening Reception Glam',
    category: 'Bridal & Occasion',
    src: SALON_IMAGES.partyMakeup,
    alt: 'Dewy evening party makeup with sleek side-swept waves',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-8',
    title: 'Rose-Petal Nail Studio',
    category: 'Studio & Nails',
    src: SALON_IMAGES.manicurePedicure,
    alt: 'Sheer rose gel manicure beside warm rose-petal soak bowl',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-9',
    title: 'Precision Silk Saree Draping',
    category: 'Bridal & Occasion',
    src: SALON_IMAGES.sareeDraping,
    alt: 'Crisply pleated champagne and burgundy silk saree draping',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-10',
    title: 'Voluminous Salon Blowout',
    category: 'Hair Artistry',
    src: SALON_IMAGES.hairStyling,
    alt: 'Glossy layered haircut styled in soft salon waves',
    aspectClass: 'aspect-[4/3]',
  },
];

/* =========================================================================
 * 8. VERIFIED CUSTOMER REVIEW PLACEHOLDERS (EDITABLE — NO INVENTED QUOTES)
 * ========================================================================= */
export const REVIEW_PLACEHOLDERS: ReviewPlaceholder[] = [
  {
    id: 'rev-slot-1',
    slotLabel: 'Verified Client Feedback Slot 01',
    serviceTag: 'Bridal Makeup & Saree Draping',
    verifiedStars: 5,
    placeholderNote:
      'Placeholder for a verified Google / WhatsApp client review. Replace this note in salonData.ts with an approved client quotation and name.',
  },
  {
    id: 'rev-slot-2',
    slotLabel: 'Verified Client Feedback Slot 02',
    serviceTag: 'Hair Spa & Layered Haircut',
    verifiedStars: 5,
    placeholderNote:
      'Placeholder for a verified client experience on hair care and styling. Add real customer feedback once permission is confirmed.',
  },
  {
    id: 'rev-slot-3',
    slotLabel: 'Verified Client Feedback Slot 03',
    serviceTag: 'Facial & Self-Care Package',
    verifiedStars: 5,
    placeholderNote:
      'Placeholder for a verified client review highlighting hygiene, skincare comfort, and Bankashi studio ambiance.',
  },
];

/* =========================================================================
 * 9. FREQUENTLY ASKED QUESTIONS
 * ========================================================================= */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is my appointment confirmed immediately when I submit the booking form?',
    answer:
      'Submitting the form opens WhatsApp (+91 70087 35414) with your pre-filled appointment request. Your slot is confirmed once our salon team replies on WhatsApp to verify time availability.',
  },
  {
    id: 'faq-2',
    question: 'Are the prices listed on this website final?',
    answer:
      'All INR prices shown are indicative starting prices to help you plan your visit. Final charges depend on hair length, density, skin requirements, or bridal customization confirmed during your consultation.',
  },
  {
    id: 'faq-3',
    question: 'Where exactly is Rupantar Beauty Salon located in Bhadrak?',
    answer:
      'We are located at Hotel Blue, Vine Street, Near Salandi Guest House, In Front of SBI ATM, Bankashi, Bhadrak, Odisha 756100. You can open direct Google Maps directions from the Location section below.',
  },
  {
    id: 'faq-4',
    question: 'Can I request a pre-bridal consultation before booking my wedding look?',
    answer:
      'Yes. Select "Bridal Makeup" or "Bridal Beauty Package" in the appointment form and mention your wedding date and preferred trial slot in the additional requirements field.',
  },
  {
    id: 'faq-5',
    question: 'Are the Before & After slider images actual customer photographs?',
    answer:
      'No. As clearly labeled in the Transformation section, the Before & After comparisons are illustrative AI-generated visuals created to demonstrate service categories, not guaranteed individual outcomes.',
  },
];
