import { registrationSchema } from "@/schemas/registration/registration.schema"
import * as yup from "yup"

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
}
