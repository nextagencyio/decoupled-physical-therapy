
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  duration?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ServiceData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface DrupalTherapist extends DrupalNode {
  body?: {
    processed: string
  }
  specialty?: string
  email?: string
  phone?: string
  photo?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
  education?: {
    processed: string
  }
  certifications?: string
}

export interface TherapistData {
  nodeTherapists: {
    nodes: DrupalTherapist[]
  }
}

export interface DrupalCondition extends DrupalNode {
  body?: {
    processed: string
  }
  symptoms?: {
    processed: string
  }
  treatmentApproach?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ConditionData {
  nodeConditions: {
    nodes: DrupalCondition[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  __typename?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeatureItem[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeatureItem {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
