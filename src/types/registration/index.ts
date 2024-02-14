import * as yup from "yup"

import { registrationSchema } from "@/schemas/registration/registration.schema"

export type RegistrationBody = yup.InferType<typeof registrationSchema>

export type RegistrationResponse = RegistrationBody & {
  id: number
  createdAt: string
  updatedAt: string
  uuid: string
  investments: string
  accruals: string
  withdrawals: string
  balance: string
  totalBalance: string
  isActive: boolean
  isRealtor: boolean
}

export type LoginBody = Pick<RegistrationBody, "email" | "password">

export type LoginResponse = {
  email: string
  isAdmin: boolean
  login: string
  name: string
  phone: string
  token: string
  userId: number
}
