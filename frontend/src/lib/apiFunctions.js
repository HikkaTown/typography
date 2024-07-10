import { client } from "./apolloClien";
import {
  getAllNewsQuery,
  getAllProjectsCardQuery,
  getCatalogPageQuery,
  getContactCardsQuery,
  getContactPageQuery,
  getCurrentProductCardQuery,
  getKeysDevelopSitesQuery,
  getMainPage,
  getNewsPageQuery,
  getPrivacyQuery,
  getProductCardQuery,
  getProductCardUrlQuery,
  getProjectPageQuery,
  getProjectTabsQuery,
  getReviewsQuery,
  getServicesQuery,
  getSmallCardProductQuery,
  getSotrudnikiQuery,
  ProductLinksQuery,
  getLandingPageQuery,
  getVoennayaFormaPageQuery,
  getTabsFormsQuery,
  getFormCardsCurrentVariantQuery,
} from "@/lib/query";
import { gql } from "@apollo/client";
import { PATH_IMAGE } from '@/lib/const';

export const getIndex = async () => {
  const { data } = await client.query({
    query: getMainPage,
  });
  let result = {
    pageData: {
      metaHead: data.glavnaya.data.attributes.pageData.metaHead,
      metaDescription: data.glavnaya.data.attributes.pageData.metaDescription,
      header: data.glavnaya.data.attributes.pageData.header,
      description: data.glavnaya.data.attributes.pageData.description,
    },
    seoBlock: {
      firstHeader: data.glavnaya.data.attributes.seoBlock.firstSeoHeader,
      secondHeader: data.glavnaya.data.attributes.seoBlock.secondSeoHeader,
      seoImagePc:
      data.glavnaya.data.attributes.seoBlock.seoImagePc.data.attributes.url,
      seoImageTablet:
      data.glavnaya.data.attributes.seoBlock.seoImageTablet.data.attributes
        .url,
      seoImageMobile:
      data.glavnaya.data.attributes.seoBlock.seoImageMobile.data.attributes
        .url,
      firstDescription:
      data.glavnaya.data.attributes.seoBlock.firstSeoDescription,
      secondDescription:
      data.glavnaya.data.attributes.seoBlock.secondSeoDescription,
    },
    shortDescription: {
      firstBlock: data.glavnaya.data.attributes.shortDescription.firstBlock,
      secondBlock: data.glavnaya.data.attributes.shortDescription.secondBlock,
      thirdBlock: data.glavnaya.data.attributes.shortDescription.thirdBlock,
    },
  };
  return result;
};

export const getReviews = async () => {
  const { data } = await client.query({
    query: getReviewsQuery,
  });
  let result = [];
  data.otzyvies.data
    ? data.otzyvies.data.map((item) => {
      const { id } = item;
      const { attributes } = item;
      let object = {
        id: id,
        personName: attributes?.personName ? attributes?.personName : null,
        userPhoto: attributes?.userPhoto?.data?.attributes?.url
          ? attributes?.userPhoto?.data?.attributes?.url
          : null,
        reviewText: attributes?.reviewText ? attributes.reviewText : null,
        stars: attributes?.stars ? attributes?.stars : null,
      };
      result.push(object);
    })
    : null;
  return result.length ? result : null;
};

export const getProjectPage = async () => {
  const { data } = await client.query({
    query: getProjectPageQuery,
  });
  const object = {
    metaHead: data.proekty.data.attributes.metaHead,
    metaDescription: data.proekty.data.attributes.metaDescription,
    header: data.proekty.data.attributes.header,
  };
  return object;
};

export const getProjectTabs = async () => {
  const { data } = await client.query({
    query: getProjectTabsQuery,
  });
  let result = [];
  data.tabyproektovs.data.map((item) => {
    const { id } = item;
    let object = {
      id: id,
      typeProjectName: item.attributes.typeProjectName,
      position: item.attributes.position,
    };
    result.push(object);
  });
  return result;
};

export const getAllProjectsCard = async () => {
  const { data } = await client.query({
    query: getAllProjectsCardQuery,
  });

  let result = [];
  data.projects.data.map((item) => {
    let images = [];
    if (item?.attributes?.images?.data?.length) {
      item.attributes.images.data.map((itemImage) => {
        images.push(itemImage.attributes.url);
      });
    }
    let object =
      item?.attributes?.category?.data?.attributes?.typeProjectName &&
      images?.length
        ? {
          images: images?.length ? images : null,
          category: item?.attributes?.category?.data?.attributes
            ?.typeProjectName
            ? item?.attributes?.category?.data?.attributes?.typeProjectName
            : null,
        }
        : null;
    result.push(object);
  });
  return result;
};

export const getCurrentProjects = async (id) => {
  const { data } = await client.query({
    query: gql`
      query getCurrentProject {
        projects(
          filters: { category: { id: { eq: ${id} } } }
          pagination: { page: 1, pageSize: 1000 }
        ) {
          data {
            id
            attributes {
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
              category {
                data {
                  id
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
    `,
  });
  let result = [];
  data.projects.data.map((item) => {
    let images = [];
    item.attributes?.images.data.map((itemImage) => {
      images.push(itemImage.attributes.url);
    });
    let object =
      images.length &&
      item?.attributes?.category?.data?.attributes?.typeProjectName
        ? {
          images: images.length ? images : null,
          category: item?.attributes?.category?.data?.attributes
            ?.typeProjectName
            ? item?.attributes?.category?.data?.attributes?.typeProjectName
            : null,
        }
        : null;
    result.push(object);
  });
  return result;
};

export const getCurrentProjectsCard = async (id) => {
  const { data } = await client.query({
    query: gql`
      query currentProjectCard {
        projects(
          filters: { category: { id: { eq: ${id} } } },
          pagination: {page: 1, pageSize: 100}
        ) {
          data {
            id
            attributes {
              images {
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
    `,
  });
  let result = [];
  data.projects.data.map((item) => {
    let images = [];
    item.attributes.images.data.map((itemImage) => {
      images.push(itemImage.attributes.url);
    });
    let object = {
      images: images,
      category: item.attributes.category.data.attributes.typeProjectName,
    };
    result.push(object);
  });
  return result;
};

export const getAllNews = async () => {
  const { data } = await client.query({
    query: getAllNewsQuery,
  });
  let result = [];
  data.novostis.data.map((item) => {
    const { attributes } = item;
    let object = {
      id: item?.id ? item?.id : null,
      url: attributes?.url ? attributes.url : null,
      postName: attributes?.postName ? attributes.postName : null,
      postText: attributes?.postText ? attributes.postText : null,
      postDate: attributes?.postDate ? attributes.postDate : null,
      image: attributes?.image?.data?.attributes?.url
        ? attributes.image.data.attributes.url
        : null,
      metaHead: attributes?.metaHead ? attributes?.metaHead : null,
      metaDescription: attributes?.metaDescription
        ? attributes.metaDescription
        : null,
    };
    result.push(object);
  });
  return result;
};

export const getNewsPage = async () => {
  const { data } = await client.query({
    query: getNewsPageQuery,
  });
  let object = {
    metaHead: data?.news?.data?.attributes?.metaHead
      ? data.news.data.attributes.metaHead
      : null,
    metaDescription: data?.news?.data?.attributes?.metaDescription
      ? data.news.data.attributes.metaDescription
      : null,
    header: data?.news?.data?.attributes?.header
      ? data?.news?.data?.attributes?.header
      : null,
  };
  return object;
};

export const getCurrentNews = async (id) => {
  const { data } = await client.query({
    query: gql`
      query novosti {
        novostis(filters: { url: { eq: "${id}" } }) {
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
        }
      }
    `,
  });
  if (data?.novostis?.data?.length) {
    const { attributes } = data?.novostis?.data[0];
    let object = {
      url: attributes?.url ? attributes?.url : null,
      postName: attributes?.postName ? attributes?.postName : null,
      postText: attributes?.postText ? attributes.postText : null,
      postDate: attributes?.postDate ? attributes?.postDate : null,
      image: attributes?.image?.data?.attributes?.url
        ? attributes.image.data.attributes.url
        : null,
      metaHead: attributes?.metaHead ? attributes?.metaHead : null,
      metaDescription: attributes?.metaDescription
        ? attributes?.metaDescription
        : null,
    };
    return object;
  } else {
    return null;
  }
};

export const getContactPage = async () => {
  const { data } = await client.query({
    query: getContactPageQuery,
  });
  let result = {
    metaHead: data.kontakty.data.attributes.metaHead,
    metaDescription: data.kontakty.data.attributes.metaDescription,
    header: data.kontakty.data.attributes.header,
    mapUrl: data.kontakty.data.attributes.mapUrl,
  };
  return result;
};

export const getContactCards = async () => {
  const { data } = await client.query({
    query: getContactCardsQuery,
  });
  let result = [];
  data.contacts.data.map((item) => {
    const { attributes } = item;
    const { id } = item;
    let res = {
      id: id,
      url: attributes.url,
      columns: attributes.column.length ? attributes.column.map((col) => ({
        header: col.header,
        lines: col.line.length ? col.line : []
      })) : [],
      name: attributes.contactName,
      address: attributes.address,
      email: attributes.email,
      phone: attributes.phoneNumber,
      pathHeader: attributes.pathHeader,
      workTime: attributes.workTime,
      workIcon: attributes?.workTimeIcon?.data.attributes.url,
      phoneIcon: attributes?.phoneIcon.data.attributes.url,
      mailIcon: attributes?.mailIcon.data.attributes.url,
      addressIcon: attributes?.addressIcon.data.attributes.url,
      cardImage: attributes?.cardImage.data.attributes.url,
      mapUrl: attributes.mapUrl,
      meta: {
        metaHead: attributes?.metaHead ? attributes?.metaHead : null,
        metaDescription: attributes?.metaDescription
          ? attributes?.metaDescription
          : null,
      },
      path: {
        onFoot: {
          description: attributes.routeOnFoot.description,
          videoBlock: {
            url: attributes.routeOnFoot.videoPreview.data.attributes.url,
            videoUrl: attributes.routeOnFoot.videoUrl,
          },
          images: attributes.routeOnFoot.images.data.map((item) => {
            return item.attributes.url;
          }),
        },
        byCar: {
          description: attributes.routeOnCar.description,
          videoBlock: {
            url: attributes.routeOnCar.videoPreview.data.attributes.url,
            videoUrl: attributes.routeOnCar.videoUrl,
          },
          images: attributes.routeOnCar.images.data.map((item) => {
            return item.attributes.url;
          }),
        },
      },
    };
    result.push(res);
  });
  return result;
};

export const getServicesList = async () => {
  const { data } = await client.query({
    query: getServicesQuery,
  });
  let res = [];
  data.services.data.map((item) => {
    const { attributes } = item;
    if (attributes?.pages?.data?.length > 1) {
      res.push({
        id: +item.id,
        url: attributes.url,
        servicesName: attributes.serviceName,
        breadName: attributes.serviceName,
        meta: attributes?.meta
          ? {
            metaHead: attributes?.meta?.metaHead
              ? attributes.meta.metaHead
              : null,
            metaDescription: attributes?.meta?.metaDescription
              ? attributes.meta.metaDescription
              : null,
            header: attributes?.meta?.header ? attributes.meta.header : null,
          }
          : null,
        seoBlock: attributes?.seoBlock
          ? {
            header: attributes?.seoBlock?.seoHeader
              ? attributes.seoBlock.seoHeader
              : null,
            seoDescription: attributes?.seoBlock?.seoDescription
              ? attributes.seoBlock.seoDescription
              : null,
          }
          : null,
        servicesPoster: attributes?.servicePoster?.data?.attributes?.url
          ? attributes?.servicePoster?.data?.attributes?.url
          : null,
      });
    } else if (attributes?.pages?.data?.length === 1) {
      res.push({
        id: +item.id,
        servicesName: attributes?.pages?.data[0]?.attributes?.tab?.tabName
          ? attributes?.pages?.data[0]?.attributes?.tab?.tabName
          : null,
        breadName: attributes?.serviceName ? attributes?.serviceName : null,
        url: attributes?.pages?.data[0]?.attributes?.url
          ? attributes?.pages?.data[0]?.attributes?.url
          : null,
        servicesPoster: attributes?.pages?.data[0].attributes?.tab?.image?.data
          ?.attributes?.url
          ? attributes?.pages?.data[0].attributes?.tab?.image?.data?.attributes
            ?.url
          : null,
      });
    }
  });
  return res;
};

export const getServicesListSitemap = async () => {
  const { data } = await client.query({
    query: getServicesQuery,
  });
  let res = [];
  data.services.data.map((item) => {
    const { attributes } = item;
    if (attributes?.pages?.data?.length > 1) {
      res.push({
        id: +item.id,
        url: attributes.url,
        servicesName: attributes.serviceName,
        meta: attributes?.meta
          ? {
            metaHead: attributes?.meta?.metaHead
              ? attributes.meta.metaHead
              : null,
            metaDescription: attributes?.meta?.metaDescription
              ? attributes.meta.metaDescription
              : null,
            header: attributes?.meta?.header ? attributes.meta.header : null,
          }
          : null,
        seoBlock: attributes?.seoBlock
          ? {
            header: attributes?.seoBlock?.seoHeader
              ? attributes?.seoBlock?.seoHeader
              : null,
            seoDescription: attributes?.seoBlock?.seoDescription
              ? attributes?.seoBlock?.secondDescription
              : null,
          }
          : null,
        servicesPoster: attributes.servicePoster.data.attributes.url,
      });
    }
  });
  return res;
};

export const getCatalogPage = async () => {
  const { data } = await client.query({
    query: getCatalogPageQuery,
  });
  return {
    metaHead: data.katalog.data.attributes.metaHead,
    metaDescription: data.katalog.data.attributes.metaDescription,
    header: data.katalog.data.attributes.header,
  };
};

export const getSmallProduct = async (id) => {
  const { data } = await client.query({
    query: getSmallCardProductQuery(id),
  });
  let res = [];
  data.straniczyUslugs.data.map((item) => {
    const { attributes } = item;
    const { id } = item;
    res.push({
      id: id,
      servicesName: attributes.tab.tabName,
      servicesPoster: attributes.tab.image.data.attributes.url,
      url: attributes.url,
    });
  });
  return res;
};

const parseTable = (data) => {
  let header = [];
  let itemsTotal = [];
  data.tableColumn.map((item, index) => {
    if (item.columnName?.length > 0) {
      header.push(item.columnName);
    }
    let rowItems = [];
    item.row.map((rowItem) => {
      rowItems.push(rowItem.rowText);
    });
    itemsTotal.push({
      id: index + 1,
      items: rowItems,
    });
  });
  return {
    headers: header,
    items: itemsTotal,
  };
};

export const getAllProductCard = async () => {
  const { data } = await client.query({
    query: getProductCardQuery,
  });
  let res = [];
  data.straniczyUslugs.data.map((item) => {
    const { attributes } = item;

    let object = {
      url: attributes.url,
      header: attributes?.header ? attributes.header : null,
      pageData: {
        metaHead: attributes?.metaHead ? attributes.metaHead : null,
        metaDescription: attributes?.metaDescription
          ? attributes.metaDescription
          : null,
        title: attributes?.title ? attributes.title : null,
        description: attributes?.description ? attributes.description : null,
      },
      infoList: attributes.infoList?.length
        ? attributes.infoList.map((item) => {
          return item.infoListItem;
        })
        : null,
      files: attributes?.files ? 1 : null,
      deliveryAmount: attributes?.deliveryAmount
        ? +attributes.deliveryAmount
        : null,
      shortDescription: {
        firstBlock: attributes?.shortDescription?.firstBlock
          ? attributes?.shortDescription?.firstBlock
          : null,
        secondBlock: attributes?.shortDescription?.secondBlock
          ? attributes?.shortDescription?.secondBlock
          : null,
        thirdBlock: attributes?.shortDescription?.thirdBlock
          ? attributes?.shortDescription?.thirdBlock
          : null,
      },
      seoBlock: {
        header: attributes?.seoBlock?.seoHeader
          ? attributes.seoBlock.seoHeader
          : null,
        seoDescription: attributes?.seoBlock?.seoDescription
          ? attributes.seoBlock.seoDescription
          : null,
      },
      projectId: attributes?.proekt?.data?.id
        ? attributes?.proekt?.data?.id
        : null,
      defaultText: attributes?.defaultText ? attributes.defaultText : null,
      defaultPrice: attributes?.defaultPrice ? attributes.defaultPrice : null,
      headStyle: attributes.headStyle,
      tech: attributes?.tech?.length
        ? attributes.tech.map((item) => {
          return {
            id: +item.id,
            name: item.name,
            photo: item.image.data.attributes.url,
            params: item.list.map((itemParams) => {
              return itemParams.title;
            }),
          };
        })
        : null,
      callbackBlockTitle: attributes?.callbackBlock?.title
        ? attributes.callbackBlock.title
        : null,
      steps: attributes?.steps?.length
        ? attributes.steps.map((item, index) => {
          return {
            id: +index + 1,
            header: item?.header ? item.header : null,
            products: item.step.map((stepItem, index) => {
              return {
                id: index + 1,
                image: stepItem.imageItem.data.attributes.url,
                name: stepItem.productName,
                price: stepItem.productPrice,
                category: stepItem.category ? stepItem.category : null,
              };
            }),
          };
        })
        : null,
      tableName: attributes?.tableName?.length
        ? attributes?.tableName.map((item) => {
          return item.name;
        })
        : null,
      table: attributes?.table?.length
        ? attributes.table.map((item) => {
          return parseTable(item);
        })
        : null,
    };
    res.push(object);
  });
  return res;
};

export const getProductCardUrl = async () => {
  const { data } = await client.query({
    query: getProductCardUrlQuery,
  });
  let res = [];
  data.straniczyUslugs.data.map((item) => {
    res.push(item.attributes.url);
  });
  return res;
};

export const getCurrentProductCard = async (url) => {
  const { data } = await client.query({
    query: getCurrentProductCardQuery(url),
  });
  let res = [];
  data.straniczyUslugs.data.map((item) => {
    const { attributes } = item;
    let object = {
      url: attributes.url,
      header: attributes?.header ? attributes.header : null,
      pageData: {
        metaHead: attributes?.metaHead ? attributes.metaHead : null,
        metaDescription: attributes?.metaDescription
          ? attributes.metaDescription
          : null,
        title: attributes?.title ? attributes.title : null,
        description: attributes?.description ? attributes.description : null,
      },
      infoList: attributes.infoList?.length
        ? attributes.infoList.map((item) => {
          return item.infoListItem;
        })
        : null,
      files: attributes?.files ? 1 : null,
      deliveryAmount: attributes?.deliveryAmount
        ? +attributes.deliveryAmount
        : null,
      shortDescription: {
        firstBlock: attributes?.shortDescription?.firstBlock
          ? attributes?.shortDescription?.firstBlock
          : null,
        secondBlock: attributes?.shortDescription?.secondBlock
          ? attributes?.shortDescription?.secondBlock
          : null,
        thirdBlock: attributes?.shortDescription?.thirdBlock
          ? attributes?.shortDescription?.thirdBlock
          : null,
      },
      seoBlock: {
        header: attributes?.seoBlock?.seoHeader
          ? attributes.seoBlock.seoHeader
          : null,
        seoDescription: attributes?.seoBlock?.seoDescription
          ? attributes.seoBlock.seoDescription
          : null,
      },
      projectId: attributes?.proekt?.data?.id
        ? attributes?.proekt?.data?.id
        : null,
      defaultText: attributes?.defaultText ? attributes.defaultText : null,
      defaultPrice: attributes?.defaultPrice ? attributes.defaultPrice : null,
      headStyle: attributes.headStyle,
      tech: attributes?.tech?.length
        ? attributes.tech.map((item) => {
          return {
            id: +item.id,
            name: item.name,
            photo: item.image.data.attributes.url,
            params: item.list.map((itemParams) => {
              return itemParams.title;
            }),
          };
        })
        : null,
      callbackBlockTitle: attributes?.callbackBlock?.title
        ? attributes.callbackBlock.title
        : null,
      steps: attributes?.steps?.length
        ? attributes.steps.map((item, index) => {
          return {
            id: +index + 1,
            header: item?.header ? item.header : null,
            products: item.step.map((stepItem, index) => {
              return {
                id: index + 1,
                image: stepItem.imageItem.data.attributes.url,
                name: stepItem.productName,
                price: stepItem.productPrice,
                category: stepItem.category ? stepItem.category : null,
              };
            }),
          };
        })
        : null,
      tableName: attributes?.tableName?.length
        ? attributes?.tableName.map((item) => {
          return item.name;
        })
        : null,
      table: attributes?.table?.length
        ? attributes.table.map((item) => {
          return parseTable(item);
        })
        : null,
      category: attributes?.category?.data?.attributes?.serviceName
        ? {
          serviceName: attributes?.category?.data?.attributes?.serviceName
            ? attributes?.category?.data?.attributes?.serviceName
            : null,
          url: attributes?.category?.data?.attributes?.url
            ? attributes?.category?.data?.attributes?.url
            : null,
          pages: attributes?.category?.data?.attributes?.pages?.data?.length
            ? attributes?.category?.data?.attributes?.pages?.data?.map(
              (page) => page.attributes.url
            )
            : null,
        }
        : null,
    };
    res.push(object);
  });
  return res;
};

export const getProductLinks = async () => {
  const { data } = await client.query({
    query: ProductLinksQuery,
  });
  let res = [];
  data.straniczyUslugs.data.map((item) => {
    res.push({
      url: item.attributes.url,
      title: item.attributes.title,
    });
  });
  return res;
};

export const getPrivacy = async () => {
  const { data } = await client.query({
    query: getPrivacyQuery,
  });
  let res = [];
  data.politikaKonfidenczialnosti.data.attributes.paragraph.map((item) => {
    res.push(item.text);
  });
  return res;
};

export const getLandingPage = async () => {
  const { data } = await client.query({
    query: getLandingPageQuery,
  });
  const { razrabotkaSajtov } = data;
  return {
    metaHead: razrabotkaSajtov?.data?.attributes?.metaTitle ? razrabotkaSajtov?.data?.attributes?.metaTitle : '',
    metaDescription: razrabotkaSajtov?.data?.attributes?.metaDescription ? razrabotkaSajtov?.data?.attributes?.metaDescription : '',
    header: razrabotkaSajtov?.data?.attributes?.header ? razrabotkaSajtov?.data?.attributes?.header : '',
    seoBlock: razrabotkaSajtov?.data?.attributes?.seoBlock ? {
      header: razrabotkaSajtov?.data?.attributes?.seoBlock?.seoHeader ? razrabotkaSajtov?.data?.attributes?.seoBlock?.seoHeader : '',
      seoDescription: razrabotkaSajtov?.data?.attributes?.seoBlock?.seoDescription ? razrabotkaSajtov?.data?.attributes?.seoBlock?.seoDescription : ''
    } : null,
    productSection: razrabotkaSajtov?.data?.attributes?.productSection?.length ? razrabotkaSajtov?.data?.attributes?.productSection.map((item, index) => {
      return {
        id: item?.id ? item.id : index,
        name: item?.name ? item.name : '',
        price: item?.price ? item.price : '',
        index: item?.index ? item.index : 0,
        image: item?.image?.data?.attributes?.url ? PATH_IMAGE + item?.image?.data?.attributes?.url : '',
      }
    }) : null,
  }
}

export const getSotrudnik = async () => {
  const { data } = await client.query({
    query: getSotrudnikiQuery,
  });
  const { sotrudnikis } = data;
  return sotrudnikis.data?.length > 0 ? sotrudnikis.data.map((item) => {
    return {
      id: item.id,
      profession: item?.attributes?.profession ? item.attributes.profession : '',
      name: item?.attributes?.name ? item.attributes.name : '',
      subtitle: item?.attributes?.subtitle ? item.attributes.subtitle : '',
      colorProfText: item?.attributes?.colorProfText ? item.attributes.colorProfText : '#056AC7',
      colorProfBackground: item?.attributes?.colorProfBackground ? item?.attributes?.colorProfBackground : '#AFD7FD',
      specific: item?.attributes?.specific ? item.attributes.specific : 0,
      src: item?.attributes?.avatar?.data?.attributes?.url ? PATH_IMAGE + item?.attributes?.avatar?.data?.attributes?.url : ''
    }
  }) : null
}

export const getKeysDevelopSites = async () => {
  const { data } = await client.query({
    query: getKeysDevelopSitesQuery
  });
  const { kejsyPoRazrabotkeSajtovs } = data;

  return kejsyPoRazrabotkeSajtovs?.data?.length > 0 ? kejsyPoRazrabotkeSajtovs.data.map((item) => {
    return {
      id: item.id,
      name: item?.attributes?.name ? item.attributes.name : null,
      preview: item?.attributes?.preview?.data?.attributes?.url ? PATH_IMAGE + item?.attributes?.preview?.data?.attributes?.url : null,
      images: item?.attributes?.images?.data?.length ? item?.attributes?.images?.data.map((item) => item?.attributes?.url ? item.attributes.url : '') : null,
    }
  }) : null
}

export const getVoennayaFormPage = async () => {
  const { data } = await client.query({
    query: getVoennayaFormaPageQuery
  });
  const { voennayaForma } = data;
  const attributes = voennayaForma.data.attributes

  return {
    pageData: {
      metaTitle: attributes?.pageData?.metaTitle ? attributes.pageData.metaTitle : 'Мета заголовок',
      metaDescription: attributes?.pageData?.metaDescription ? attributes.pageData.metaDescription : 'Мета описание',
      header: attributes?.pageData?.header ? attributes.pageData.header : 'заголовок',
      description: attributes?.pageData?.description ? attributes.pageData.description : 'описание',
    },
    shortDescription: {
      firstBlock: attributes?.shortDescription?.firstBlock
        ? attributes?.shortDescription?.firstBlock
        : null,
      secondBlock: attributes?.shortDescription?.secondBlock
        ? attributes?.shortDescription?.secondBlock
        : null,
      thirdBlock: attributes?.shortDescription?.thirdBlock
        ? attributes?.shortDescription?.thirdBlock
        : null,
    },
    projectId: attributes?.vidy_proektov?.data?.id
      ? attributes?.vidy_proektov?.data?.id
      : null,
    seoBlock: {
      header: attributes?.seoBlock?.seoHeader
        ? attributes.seoBlock.seoHeader
        : null,
      seoDescription: attributes?.seoBlock?.seoDescription
        ? attributes.seoBlock.seoDescription
        : null,
    },
    callbackBlockTitle: attributes?.callbackBlock?.title
      ? attributes.callbackBlock.title
      : null,
    category: attributes?.category?.data?.attributes?.serviceName
      ? {
        serviceName: attributes?.category?.data?.attributes?.serviceName
          ? attributes?.category?.data?.attributes?.serviceName
          : null,
        url: attributes?.category?.data?.attributes?.url
          ? attributes?.category?.data?.attributes?.url
          : null,
        pages: attributes?.category?.data?.attributes?.pages?.data?.length
          ? attributes?.category?.data?.attributes?.pages?.data?.map(
            (page) => page.attributes.url
          )
          : null,
      }
      : null,
  }
}

export const getTabsForm = async () => {
  const { data } = await client.query({
    query: getTabsFormsQuery
  });

  const tabs = data.variantyForms.data;
  return tabs?.length > 0 ? tabs.map((item) => {
    return {
      id: item.id,
      variantName: item.attributes.variantName,
      position: item.attributes.position,
    }
  }) : null
}

export const getCurrentFormCards = async (id) => {
  const { data } = await client.query({
    query: getFormCardsCurrentVariantQuery(id)
  });

  if (data.kartochkiFormies.data?.length > 0) {
    const list = data.kartochkiFormies.data;
    return list.map((item) => (
      {
        id: item.id,
        name: item?.attributes?.name ? item.attributes.name : 'Без названия',
        position: item?.attributes?.position ? item.attributes.position : 0,
        image: item?.attributes?.image?.data?.attributes?.url ? PATH_IMAGE + item.attributes.image.data.attributes.url : '#'
      }
    ))
  }
  return []

}