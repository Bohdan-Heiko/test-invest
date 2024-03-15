export type ModalTypes =
  | "no-modal"
  | "confirm-modal"
  | "realtor-modal"
  | "reltor-notFound"
  | "changePassword-modal"
  | "success-modal"

export type RealtorModalData = {
  type: "realtor-modal"
  data: {
    findRealtor: (link: string) => void
  }
}

export type ChangePasswordModalData = {
  type: "changePassword-modal"
}

export type ConfrimModalData = {
  type: "confirm-modal"
  data: {
    title: string
    subTitle?: string
    handlePress?: () => void
  }
}

export type RealtorNotFoundModal = {
  type: "reltor-notFound"
  data: {
    handlePress?: () => void
  }
}

export type SuccessModalData = {
  type: "success-modal"
  data: {
    title: string
    subTitle?: string
  }
}

export type ModalData =
  | RealtorModalData
  | ConfrimModalData
  | RealtorNotFoundModal
  | ChangePasswordModalData
  | SuccessModalData

export interface IModalContext {
  modalData: ModalData
  openModal: (data: ModalData) => void
  updateModalData: (data: ModalData) => void
  closeModal: () => void
}
