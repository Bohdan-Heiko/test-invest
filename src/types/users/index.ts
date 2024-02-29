export interface UserDataResponse {
  accruals: string
  balance: string
  birthdate: string
  createdAt: string
  email: string
  id: number
  investments: string
  isActive: boolean
  isAllowCryptoPayment: boolean
  isRealtor: boolean
  realtor?: Realtor
  inviteLink?: string
  name: string
  phone: string
  taxNumber: string
  totalBalance: string
  updatedAt: string
  uuid: string
  withdrawals: string
}

interface ActivatedBy {
  accruals: string;
  balance: string;
  birthdate: string;
  createdAt: string;
  email: string;
  id: number;
  investments: string;
  isActive: boolean;
  isAllowCryptoPayment: boolean;
  isRealtor: boolean;
  name: string;
  phone: string;
  taxNumber: string;
  totalBalance: string;
  updatedAt: string;
  uuid: string;
  withdrawals: string;
}

interface Realtor {
  accruals: string;
  activatedBy: ActivatedBy;
  balance: string;
  birthdate: string;
  createdAt: string;
  email: string;
  id: number;
  investments: string;
  inviteLink: string;
  isActive: boolean;
  isAllowCryptoPayment: boolean;
  isRealtor: boolean;
  name: string;
  phone: string;
  taxNumber: string;
  totalBalance: string;
  updatedAt: string;
  uuid: string;
  withdrawals: string;
}


/////////////
interface User {
  id: number
  name: string
}

interface Building {
  id: number
  title: string
}

export interface UserAccrualsDataResponse {
  id: number
  user: User
  building: Building
  amount: string
  comment: string
  createdAt: string
  updatedAt: string
  percent: number
  investment: UserAccrualsDataResponse
  status: string
}

////////

export interface UserInvestmentsDataResponse {
  id: number
  user: User
  building: Building
  amount: string
  comment: string
  createdAt: string
  updatedAt: string
  status: string
}
