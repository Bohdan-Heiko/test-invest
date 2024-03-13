export type ModalTypes = "no-modal" | "invest-modal" | "realtor-modal"

type RealtorModalData = {
  findRealtor: (link: string) => void
}

export type ModalData = RealtorModalData

export interface IModalContext {
  openedModal: ModalTypes
  modalData: ModalData
  openModal: (type: ModalTypes, modalData?: ModalData) => void
  updateModalData: (data: any) => void
  closeModal: () => void
}
