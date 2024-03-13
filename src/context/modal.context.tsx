import { createContext, useContext, useMemo, useState } from "react"

import { ModalBlockRouter } from "@/shared/components"
import { IModalContext, ModalData, ModalTypes } from "@/types"

export const ModalsContext = createContext({} as IModalContext)

export const ModalsProvider = ({ children }: { children: JSX.Element }) => {
  const [openedModal, setOpenedModal] = useState<ModalTypes>("no-modal")
  const [modalData, setModalData] = useState<any>()

  const openModal = (type: ModalTypes, data: ModalData) => {
    setOpenedModal(type)
    setModalData(data)
  }

  const updateModalData = (data: ModalData) => {
    setModalData(data)
  }

  const closeModal = () => {
    setOpenedModal("no-modal")
    setModalData("")
  }

  const value = useMemo(() => {
    return {
      openedModal,
      modalData,
      openModal,
      closeModal,
      updateModalData
    }
  }, [modalData, openedModal]) as IModalContext

  return (
    <ModalsContext.Provider value={value}>
      {children}
      <ModalBlockRouter
        openedModal={openedModal}
        modalData={modalData}
        closeModal={closeModal}
      />
    </ModalsContext.Provider>
  )
}

export const useModalContext = () => {
  const { openedModal, modalData, openModal, updateModalData, closeModal } =
    useContext(ModalsContext)

  return { openedModal, modalData, openModal, updateModalData, closeModal }
}
