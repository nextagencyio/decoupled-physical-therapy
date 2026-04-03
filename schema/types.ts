// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeCondition {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  symptoms: { value: string };
  title: string;
  treatmentApproach: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuresItems: any[];
  featuresSubtitle: string;
  featuresTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: { value: string };
  icon: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  duration: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodeTherapist {
  id: string;
  body: { value: string; summary?: string };
  certifications: string;
  education: { value: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  specialty: string;
  title: string;
}
