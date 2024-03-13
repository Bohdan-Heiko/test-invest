export type ModalTypes = "no-modal" | "confirm-modal" | "realtor-modal"

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
  }
}

export type ModalData = RealtorModalData | ConfrimModalData 

export interface IModalContext {
  // openedModal: ModalTypes
  modalData: ModalData
  openModal: (data: ModalData) => void
  updateModalData: (data: ModalData) => void
  closeModal: () => void
}
