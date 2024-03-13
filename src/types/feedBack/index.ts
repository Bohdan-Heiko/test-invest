export interface FeedbackResponse {
  id: number
  name: string
  phone: string
  isProcessed: boolean
  createdAt: string
  updatedAt: string
}

export interface FeedbackBody {
  name: string
  phone: string
}
