export type ModalTypes = "no-modal" | "invest-modal" | string

export type ModalData = {
  show: boolean
  data: any
}

export interface IModalContext {
  openedModal: ModalTypes
  modalData: any
  openModal: (type: ModalTypes, modalData?: Record<string, any>) => void
  updateModalData: (data: any) => void
  closeModal: () => void
}
