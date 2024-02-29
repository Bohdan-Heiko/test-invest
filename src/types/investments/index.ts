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

export interface CheckPaymentStatus {
  status: "InProcessing" | "WaitingAuthComplete" | "Approved" | "Declined" | null
  reason: string | null
  card: string | null
  email: string | null
  name: string | null
  phone: string | null
}

export interface ConfirmPaymentResponse {
  id: number
  user: User
  building: Building
  uuid: string
  amount: string
  currency: string
  authCode: string
  card: string
  token: string
  status: string
  reason: string
  fee: string
  system: string
  comment: string
}
