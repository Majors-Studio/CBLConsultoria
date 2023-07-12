export interface newsInterface {
  metadata: {
    tags: any[]
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    revision: number
    contentType: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    locale: string
  }
  fields: {
    title: string
    publishedDate: string
    content: {
      data: any
      content: {
        data: any
        content: {
          data: any
          marks: any[]
          value: string
          nodeType: string
        }[]
        nodeType: string
      }[]
      nodeType: string
    }
    featuredImage: {
      fields: {
        title: string
        description: string
        file: {
          url: string
          details: {
            size: number
            image: {
              width: number
              height: number
            }
          }
          fileName: string
        }
      }
    }
  }
}
