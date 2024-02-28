interface User {
  id: number
  name: string
}

interface Building {
  id: number
  title: string
}

export interface TransactionBody {
  building: Pick<Building, "id">
  amount: string
}

export interface TransactionResponse {
  id: number
  user: User
  building: Building
  uuid: string
  currency: string
  amount: string
  comment: string
  createdAt: string
  updatedAt: string
  url: string
}
