interface Photos {
  contentUrl: string
  file: string
}

export interface BuidersResponse {
  id: number
  title: string
  description: string
  photos: Photos
  createdAt: string
  updatedAt: string
}
