export type ModalTypes =
  | "no-modal"
  | "confirm-modal"
  | "realtor-modal"
  | "reltor-notFound"

export type RealtorModalData = {
  type: "realtor-modal"
  data: {
    findRealtor: (link: string) => void
  }
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

export type ModalData = RealtorModalData | ConfrimModalData | RealtorNotFoundModal

export interface IModalContext {
  modalData: ModalData
  openModal: (data: ModalData) => void
  updateModalData: (data: ModalData) => void
  closeModal: () => void
}
