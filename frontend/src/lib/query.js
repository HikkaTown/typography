import { gql } from "@apollo/client";

export const getMainPage = gql`
  query IndexData {
    glavnaya {
      data {
        attributes {
          pageData {
            metaHead
            metaDescription
            header
            description
          }
          seoBlock {
            firstSeoHeader
            secondSeoHeader
            seoImagePc {
              data {
                attributes {
                  url
                }
              }
            }
            seoImageTablet {
              data {
                attributes {
                  url
                }
              }
            }
            seoImageMobile {
              data {
                attributes {
                  url
                }
              }
            }
            firstSeoDescription
            secondSeoDescription
          }
          shortDescription {
            firstBlock
            secondBlock
            thirdBlock
          }
        }
      }
    }
  }
`;

export const getReviewsQuery = gql`
  query reviews {
    otzyvies(pagination: { page: 1, pageSize: 100 }) {
      data {
        id
        attributes {
          personName
          stars
          userPhoto {
            data {
              attributes {
                url
              }
            }
          }
          reviewText
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getProjectPageQuery = gql`
  query projectPage {
    proekty {
      data {
        attributes {
          metaHead
          metaDescription
          header
        }
      }
    }
  }
`;

export const getProjectTabsQuery = gql`
  query projectTabs {
    tabyproektovs(
      sort: "position:asc"
      pagination: { page: 1, pageSize: 1000 }
    ) {
      data {
        id
        attributes {
          typeProjectName
          position
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getAllProjectsCardQuery = gql`
  query allProjectCards {
    projects(pagination: { page: 1, pageSize: 1000 }) {
      data {
        id
        attributes {
          images(pagination: { page: 1, pageSize: 100 }) {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                typeProjectName
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getAllNewsQuery = gql`
  query novosti {
    novostis(pagination: { page: 1, pageSize: 100 }) {
      data {
        id
        attributes {
          url
          postName
          postText
          postDate
          metaHead
          metaDescription
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getNewsPageQuery = gql`
  query newsPage {
    news {
      data {
        attributes {
          metaHead
          metaDescription
          header
        }
      }
    }
  }
`;

export const getContactPageQuery = gql`
  query contactPage {
    kontakty {
      data {
        attributes {
          header
          metaHead
          metaDescription
          mapUrl
        }
      }
    }
  }
`;

export const getContactCardsQuery = gql`
  query contactsCards {
    contacts(pagination: { page: 1, pageSize: 100 }) {
      data {
        id
        attributes {
          url
          meta {
            metaHead
            metaDescription
            header
          }
          cardImage {
            data {
              attributes {
                url
              }
            }
          }
          mailIcon {
            data {
              attributes {
                url
              }
            }
          }
          workTimeIcon {
            data {
              attributes {
                url
              }
            }
          }
          phoneIcon {
            data {
              attributes {
                url
              }
            }
          }
          addressIcon {
            data {
              attributes {
                url
              }
            }
          }
          contactName
          address
          phoneNumber
          email
          mapUrl
          workTime
          pathHeader
          routeOnFoot {
            description
            videoUrl
            videoPreview {
              data {
                attributes {
                  url
                }
              }
            }
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
          routeOnCar {
            description
            videoUrl
            videoPreview {
              data {
                attributes {
                  url
                }
              }
            }
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getServicesQuery = gql`
  query services {
    services(pagination: { page: 1, pageSize: 100 }) {
      data {
        id
        attributes {
          url
          serviceName
          meta {
            header
            metaHead
            metaDescription
          }
          pages {
            data {
              attributes {
                url
                tab {
                  tabName
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          servicePoster {
            data {
              attributes {
                url
              }
            }
          }
          seoBlock {
            seoHeader
            seoDescription
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getCatalogPageQuery = gql`
  query catalogPage {
    katalog {
      data {
        attributes {
          metaHead
          metaDescription
          header
        }
      }
    }
  }
`;

export const getProductCardQuery = gql`
  query allProductsCards {
    straniczyUslugs(pagination: { page: 1, pageSize: 100 }) {
      data {
        attributes {
          url
          header
          metaHead
          metaDescription
          title
          description
          defaultText
          defaultPrice
          headStyle
          files
          shortDescription {
            firstBlock
            secondBlock
            thirdBlock
          }
          seoBlock {
            seoHeader
            seoDescription
          }
          tech {
            id
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
            list {
              title
            }
          }
          callbackBlock {
            title
          }
          tab {
            tabName
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          steps {
            header
            step {
              id
              productName
              productPrice
              category
              imageItem {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          column {
            columnName
            row {
              rowText
            }
          }
          category {
            data {
              id
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getCurrentProductQuery = (url) => gql`
query getCurrentProduct {
  straniczyUslugs(filters: {url: {eq: ${url}}}pagination: {page:1, pageSize: 100}) {
    data {
      attributes {
        url
        header
        metaHead
        metaDescription
        title
        vidy_proektov {
          data {
            id
          }
        }
        tableName {
          name
        }
        table {
          tableColumn {
          	columnName
          	row {
            	rowText
	          }
        	}
        }
        description
        defaultText
        defaultPrice
        headStyle
        files
        infoList {
          infoListItem
        }
        tech {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
          list {
            title
          }
        }
        callbackBlock {
          title
        }
        tab {
          tabName
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        steps {
          header
          step {
            id
            productName
            productPrice
            category
            imageItem {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        category {
          data {
            id
          }
        }
      }
    }
    meta {
      pagination{
        page
        pageSize
      }
    }
  }
}
`;

export const getSmallCardProductQuery = (id) => gql`
query currentProductCard {
  straniczyUslugs(filters: { category: { url: { eq: "${id}" } } }, pagination: {page: 1, pageSize: 100}) {
    data {
      id
      attributes {
        url
        tab {
          tabName
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        category {
          data {
            id
          }
        }
      }
    }
  meta {
    pagination {
      pageSize
      page
    }
  }
  }
}
`;

export const getProductCardUrlQuery = gql`
  query getUrlCards {
    straniczyUslugs(pagination: { page: 1, pageSize: 100 }) {
      data {
        attributes {
          url
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getCurrentProductCardQuery = (url) => gql`
  query allProductsCards {
    straniczyUslugs(filters: {url: {eq: "${url}" }}pagination: { page: 1, pageSize: 100 }) {
      data {
        attributes {
          url
          header
          metaHead
          metaDescription
          title
          category {
            data {
              attributes {
                serviceName
                url
                pages(pagination: {
              page: 1, pageSize: 100
            }) {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          proekt {
            data {
              id
              attributes {
              	typeProjectName
              }
            }
          }
          tableName {
            name
          }
          table {
            tableColumn {
              columnName
              row {
                rowText
              }
            }
          }
          description
          defaultText
          defaultPrice
          deliveryAmount
          headStyle
          files
          infoList {
            infoListItem
          }
          shortDescription {
            firstBlock
            secondBlock
            thirdBlock
          }
          seoBlock {
            seoHeader
            seoDescription
          }
          tech {
            id
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
            list {
              title
            }
          }
          callbackBlock {
            title
          }
          tab {
            tabName
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          steps {
            header
            step(pagination: {
              page: 1, pageSize: 100
            }) {
              id
              productName
              productPrice
              category
              imageItem {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          category {
            data {
              id
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const ProductLinksQuery = gql`
  query productsLinks {
    straniczyUslugs(pagination: { page: 1, pageSize: 100 }) {
      data {
        attributes {
          url
          title
        }
      }
      meta {
        pagination {
          page
          pageSize
        }
      }
    }
  }
`;

export const getPrivacyQuery = gql`
  query getPrivacy {
    politikaKonfidenczialnosti {
      data {
        attributes {
          paragraph {
            text
          }
        }
      }
    }
  }
`;


export const getLandingPageQuery = gql`
query getLandingPage {
  razrabotkaSajtov {
    data {
      attributes {
        header
        metaTitle
        metaDescription
        seoBlock {
          seoHeader
          seoDescription
        }
        productSection {
          id
          name
          price
          index
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
}
`

export const getSotrudnikiQuery = gql`
query getSotrudniki {
  sotrudnikis(pagination: {pageSize: 1000}) {
    data {
      id
      attributes {
        name
        profession
        subtitle
        avatar {
          data {
            attributes {
              url
            }
          }
        }
        colorProfText
        colorProfBackground
      }
    }
  }
}
`

export const getKeysDevelopSitesQuery = gql`
query getKeysDevelopSite {
  kejsyPoRazrabotkeSajtovs(pagination: {pageSize: 1000}) {
    data {
      id
      attributes {
        name
        preview {
          data {
            attributes {
              url
            }
          }
        }
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const getVoennayaFormaPageQuery = gql`
query getVoennayaFormaPage {
  voennayaForma {
    data {
      attributes {
        pageData {
          metaHead
          metaDescription
          header
          description
        }
        shortDescription {
          firstBlock
          secondBlock
          thirdBlock
        }
      	callbackBlock {
          title
        }
        seoBlock {
          seoHeader
          seoDescription
        }
        tab {
          image {
            data {
              attributes {
                url
              }
            }
          }
          tabName
        }
        vidy_proektov {
          data {
            id
            attributes {
              typeProjectName
              position
            }
          }
        }
        category {
          data {
            attributes {
              serviceName
              url
              pages(pagination: {
            page: 1, pageSize: 100
          }) {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;


export const getTabsFormsQuery = gql`
query varaintForms {
  variantyForms(pagination: {page: 1, pageSize: 1000}) {
    data {
      id
      attributes {
        variantName
        position
      }
    }
  }
}
`;

export const getFormCardsCurrentVariantQuery = (id) => gql`
query cardFormsCurrentVariant {
  kartochkiFormies(filters: {variant: {id: {eq: "${id}"}}}, pagination: {page: 1, pageSize: 1000}) {
    data {
      id
      attributes {
        name
        position
        image {
          data {
            attributes {
            	url
            }
          }
        }
        variant {
          data {
            id
          }
        }
      }
    }
  }
}
`