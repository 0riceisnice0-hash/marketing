export type Region = 'uk' | 'us';

export interface BranchInfo {
  name: string;
  location: string;
  phone: string;
  phoneUK?: string;
  email: string;
  whatsapp: string;
  currency: string;
  currencySymbol: string;
  spelling: {
    optimise: string;
    specialise: string;
    customise: string;
  };
}

export interface PricingTier {
  name: string;
  price: number;
  turnaround: string;
  description: string;
  features: string[];
}

export interface ExampleProject {
  id: string;
  title: string;
  industry: string;
  image: string;
  description: string;
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  content: string;
  rating: number;
}

export const SITE_NAME = 'Hydron Marketing';

export const REGIONS: Record<Region, BranchInfo> = {
  uk: {
    name: 'Hydron Marketing UK',
    location: 'Aylesbury, Buckinghamshire',
    phone: '+44 792 6037 173',
    email: 'marketinghydron@gmail.com',
    whatsapp: '+44 7700 900123',
    currency: 'GBP',
    currencySymbol: '£',
    spelling: {
      optimise: 'optimise',
      specialise: 'specialise',
      customise: 'customise',
    },
  },
  us: {
    name: 'Hydron Marketing USA',
    location: 'Florida',
    phone: '1-248-705-1000',
    phoneUK: '+44 792 6037 173',
    email: 'marketinghydron@gmail.com',
    whatsapp: '',
    currency: 'USD',
    currencySymbol: '$',
    spelling: {
      optimise: 'optimize',
      specialise: 'specialize',
      customise: 'customize',
    },
  },
};

export const PRICING: Record<Region, PricingTier[]> = {
  uk: [
    {
      name: 'Starter Websites',
      price: 149,
      turnaround: 'Within 2 days or less',
      description: 'Quick and professional starter website for small businesses.',
      features: [
        'Up to 3 pages',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Within 2 days or less',
      ],
    },
    {
      name: 'Custom Website',
      price: 299,
      turnaround: 'Within 4 days or less',
      description: 'Fully custom design tailored to your brand and business goals.',
      features: [
        'Up to 5 pages',
        'Custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'SEO optimisation',
        'Google Analytics setup',
        'Social media integration',
        'Within 4 days or less',
      ],
    },
    {
      name: 'Business Website Plus',
      price: 599,
      turnaround: 'Within 1 week or less',
      description: 'Enhanced website with advanced features for growing businesses.',
      features: [
        'Up to 8 pages',
        'Premium custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Full SEO optimisation',
        'Google Analytics setup',
        'Social media integration',
        'Advanced contact forms',
        'Performance optimisation',
        'Google Analytics & Search Console',
        'Blog/news section ready',
        'Within 1 week or less',
      ],
    },
    {
      name: 'Premium Website',
      price: 799,
      turnaround: 'Priority turnaround (fast-tracked based on project needs)',
      description: 'Top-tier website with AI-powered features for maximum impact.',
      features: [
        'Up to 12 pages',
        'Premium custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Full SEO optimisation',
        'Google Analytics setup',
        'Social media integration',
        'Advanced forms & lead capture',
        'Performance optimisation',
        'Google Analytics & Search Console',
        'Blog/news section ready',
        'AI chat assistant (optional add-on)',
        'AI FAQ/support widget',
        'AI lead capture automation',
        'Smart contact routing & automated replies',
        'Priority support',
        'Priority turnaround (fast-tracked based on project needs)',
      ],
    },
  ],
  us: [
    {
      name: 'Starter Websites',
      price: 199,
      turnaround: 'Within 2 days or less',
      description: 'Quick and professional starter website for small businesses.',
      features: [
        'Up to 3 pages',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Within 2 days or less',
      ],
    },
    {
      name: 'Custom Website',
      price: 399,
      turnaround: 'Within 4 days or less',
      description: 'Fully custom design tailored to your brand and business goals.',
      features: [
        'Up to 5 pages',
        'Custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'SEO optimization',
        'Google Analytics setup',
        'Social media integration',
        'Within 4 days or less',
      ],
    },
    {
      name: 'Business Website Plus',
      price: 799,
      turnaround: 'Within 1 week or less',
      description: 'Enhanced website with advanced features for growing businesses.',
      features: [
        'Up to 8 pages',
        'Premium custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Full SEO optimization',
        'Google Analytics setup',
        'Social media integration',
        'Advanced contact forms',
        'Performance optimization',
        'Google Analytics & Search Console',
        'Blog/news section ready',
        'Within 1 week or less',
      ],
    },
    {
      name: 'Premium Website',
      price: 999,
      turnaround: 'Priority turnaround (fast-tracked based on project needs)',
      description: 'Top-tier website with AI-powered features for maximum impact.',
      features: [
        'Up to 12 pages',
        'Premium custom design',
        'Mobile responsive',
        'Contact form',
        'Basic SEO setup',
        'Full SEO optimization',
        'Google Analytics setup',
        'Social media integration',
        'Advanced forms & lead capture',
        'Performance optimization',
        'Google Analytics & Search Console',
        'Blog/news section ready',
        'AI chat assistant (optional add-on)',
        'AI FAQ/support widget',
        'AI lead capture automation',
        'Smart contact routing & automated replies',
        'Priority support',
        'Priority turnaround (fast-tracked based on project needs)',
      ],
    },
  ],
};

export const EXAMPLE_PROJECTS: ExampleProject[] = [
  {
    id: 'mobile-hairstyling',
    title: 'Mobile Hairstyling',
    industry: 'Beauty & Personal Care',
    image: '/images/example-hairstyling.jpg',
    description: 'Professional mobile hairstyling service showcasing portfolio and booking options.',
    demoUrl: 'https://www.mobile-hairstyling.co.uk/'
  },
  {
    id: 'ecowise-italy',
    title: 'EcoWise Italy',
    industry: 'Eco-Tourism',
    image: '/images/example-ecowise.jpg',
    description: 'Sustainable tourism and eco-friendly travel experiences in Italy.',
    demoUrl: 'https://ecowiseitaly.com/'
  },
  {
    id: 'fenster-glazing',
    title: 'Fenster Glazing',
    industry: 'Construction & Glazing',
    image: '/images/example-fenster.jpg',
    description: 'Professional glazing and window installation services with project showcase.',
    demoUrl: 'https://fensterglazing.com/'
  },
];

export const TESTIMONIALS: Record<Region, Testimonial[]> = {
  uk: [
    {
      id: 'uk-1',
      name: 'Sam T.',
      business: 'Plumbing',
      content: 'The website helped me get three new customers in the first month. Clean design and easy to update.',
      rating: 5,
    },
    {
      id: 'uk-2',
      name: 'Priya K.',
      business: 'Cleaning Services',
      content: 'Professional site at a fair price. The team made the whole process simple and stress-free.',
      rating: 5,
    },
    {
      id: 'uk-3',
      name: 'James M.',
      business: 'Electrical',
      content: 'Great value for money. The site looks brilliant on mobile which is how most of my customers find me.',
      rating: 5,
    },
    {
      id: 'uk-4',
      name: 'Lisa R.',
      business: 'Hairdressing',
      content: 'I can finally take online bookings. The contact form works perfectly and I love the clean look.',
      rating: 4,
    },
    {
      id: 'uk-5',
      name: 'David H.',
      business: 'Carpentry',
      content: 'Exactly what I needed. No fuss, no complications, just a solid website that does the job.',
      rating: 5,
    },
    {
      id: 'uk-6',
      name: 'Emma W.',
      business: 'Catering',
      content: 'The turnaround was quick and the draft they showed me first was spot on. Highly recommend.',
      rating: 5,
    },
    {
      id: 'uk-7',
      name: 'Michael B.',
      business: 'Landscaping',
      content: 'Finally have somewhere to showcase my work. The gallery layout is perfect for my photos.',
      rating: 5,
    },
    {
      id: 'uk-8',
      name: 'Sophie L.',
      business: 'Yoga Studio',
      content: 'Calm, professional design that matches my brand perfectly. Worth every penny.',
      rating: 5,
    },
    {
      id: 'uk-9',
      name: 'Tom D.',
      business: 'Painting & Decorating',
      content: 'Mobile-friendly and loads fast. Several customers have commented on how professional it looks.',
      rating: 4,
    },
    {
      id: 'uk-10',
      name: 'Aisha N.',
      business: 'Personal Training',
      content: 'The contact form captures all the details I need and the pricing page is crystal clear.',
      rating: 5,
    },
  ],
  us: [
    {
      id: 'us-1',
      name: 'Carlos M.',
      business: 'HVAC Services',
      content: 'Got my website up in two weeks. Professional look without the agency prices.',
      rating: 5,
    },
    {
      id: 'us-2',
      name: 'Jennifer S.',
      business: 'Pet Grooming',
      content: 'Love the design! My customers can easily find my hours and book appointments.',
      rating: 5,
    },
    {
      id: 'us-3',
      name: 'Robert T.',
      business: 'Roofing',
      content: 'Simple, clean, and gets the job done. Exactly what a small business needs.',
      rating: 5,
    },
    {
      id: 'us-4',
      name: 'Amanda K.',
      business: 'Bakery',
      content: 'The gallery section is perfect for showing off my cakes. Great value for the price.',
      rating: 4,
    },
    {
      id: 'us-5',
      name: 'Marcus J.',
      business: 'Auto Repair',
      content: 'Fast turnaround and responsive team. My site looks great on all devices.',
      rating: 5,
    },
    {
      id: 'us-6',
      name: 'Rachel P.',
      business: 'Photography',
      content: 'Beautiful portfolio layout. The team understood exactly what I was looking for.',
      rating: 5,
    },
    {
      id: 'us-7',
      name: 'Kevin L.',
      business: 'Lawn Care',
      content: 'Professional website that makes my business look established. Very happy with the result.',
      rating: 5,
    },
    {
      id: 'us-8',
      name: 'Nicole R.',
      business: 'Massage Therapy',
      content: 'Clean design and easy navigation. The mobile version works perfectly for my on-the-go clients.',
      rating: 5,
    },
    {
      id: 'us-9',
      name: 'Daniel F.',
      business: 'Handyman Services',
      content: 'No-nonsense website at a fair price. Exactly what I needed to get online.',
      rating: 4,
    },
    {
      id: 'us-10',
      name: 'Samantha W.',
      business: 'Interior Design',
      content: 'The aesthetic is perfect for my brand. Professional without being stuffy.',
      rating: 5,
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: 'How fast can you build it?',
    answer: 'Template websites take around 2 weeks, custom designs 3 weeks, and ecommerce sites about 4 weeks. We show you a draft first so you can review before we finalize anything.',
  },
  {
    question: "What's included in 5 pages?",
    answer: 'Typically: Home, About, Services, Gallery/Portfolio, and Contact. You can adjust this to suit your business needs.',
  },
  {
    question: 'Can you connect my domain?',
    answer: "Yes, we'll help you point your domain to your new site. If you don't have a domain yet, we can guide you through purchasing one.",
  },
  {
    question: 'Can I edit it later?',
    answer: "We provide clear documentation and can show you how to make basic updates. For bigger changes, we're available for ongoing support.",
  },
  {
    question: 'What about hosting?',
    answer: 'We recommend reliable hosting providers and can help set it up. Hosting typically costs £5-15/month or $10-20/month depending on your needs.',
  },
  {
    question: 'What about SEO?',
    answer: 'All sites include SEO foundations: proper page titles, meta descriptions, mobile optimization, and fast loading. This gives you a solid base to rank in search engines.',
  },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/hydronmarketing',
  linkedin: 'https://linkedin.com/company/hydronmarketing',
  facebook: 'https://facebook.com/hydronmarketing',
};
