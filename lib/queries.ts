// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_SERVICE_TEASERS = gql`
  query GetServiceTeasers($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeService {
          body {
            processed
            summary
          }
          duration
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_THERAPIST_TEASERS = gql`
  query GetTherapistTeasers($first: Int = 10) {
    nodeTherapists(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeTherapist {
          body {
            processed
          }
          specialty
          email
          phone
          photo {
            url
            alt
            width
            height
          }
          education {
            processed
          }
          certifications
        }
      }
    }
  }
`

export const GET_CONDITION_TEASERS = gql`
  query GetConditionTeasers($first: Int = 10) {
    nodeConditions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeCondition {
          body {
            processed
          }
          symptoms {
            processed
          }
          treatmentApproach
          image {
            url
            alt
            width
            height
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        featuresTitle
        featuresSubtitle
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description { processed }
            icon
          }
        }
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            body {
              processed
            }
          }
          ... on NodeService {
            __typename
            id
            title
            body {
              processed
            }
            duration
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeTherapist {
            __typename
            id
            title
            body {
              processed
            }
            specialty
            email
            phone
            photo {
              url
              alt
              width
              height
            }
            education {
              processed
            }
            certifications
          }
          ... on NodeCondition {
            __typename
            id
            title
            body {
              processed
            }
            symptoms {
              processed
            }
            treatmentApproach
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`
