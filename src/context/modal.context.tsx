import { createContext, useContext, useMemo, useState } from "react"

import { ModalBlockRouter } from "@/shared/components"
import { IModalContext, ModalData } from "@/types"

export const ModalsContext = createContext({} as IModalContext)

export const ModalsProvider = ({ children }: { children: JSX.Element }) => {
  const [modalData, setModalData] = useState<ModalData | null>(null)

  const openModal = (data: ModalData) => {
    setModalData(data)
  }

  const updateModalData = (data: ModalData) => {
    setModalData(data)
  }

  const closeModal = () => {
    setModalData(null)
  }

  const value = useMemo(() => {
    return {
      modalData,
      openModal,
      closeModal,
      updateModalData
    }
  }, [modalData]) as IModalContext

  return (
    <ModalsContext.Provider value={value}>
      {children}
      <ModalBlockRouter
        openModal={openModal}
        modalData={modalData!}
        closeModal={closeModal}
      />
    </ModalsContext.Provider>
  )
}

export const useModalContext = () => {
  const { modalData, openModal, updateModalData, closeModal } = useContext(ModalsContext)

  return { modalData, openModal, updateModalData, closeModal }
}
