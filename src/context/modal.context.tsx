import { createContext, useContext, useMemo, useState } from "react"

import { ModalBlockRouter } from "@/shared/components"
import { IModalContext, ModalData, ModalTypes } from "@/types"

export const ModalsContext = createContext({} as IModalContext)

// interface RealtorModal {
//   type: "reltor"
//   data: { a: number; b: number }
// }

// interface ConfirmModal {
//   type: "confirm"
//   data: { a: string; uuid: number }
// }

// type newModalData = RealtorModal | ConfirmModal

export const ModalsProvider = ({ children }: { children: JSX.Element }) => {
  // const [openedModal, setOpenedModal] = useState<ModalTypes>("no-modal")
  const [modalData, setModalData] = useState<ModalData | null>(null)

  const openModal = (data: ModalData) => {
    // setOpenedModal(type)
    setModalData(data)
  }

  const updateModalData = (data: ModalData) => {
    setModalData(data)
  }

  const closeModal = () => {
    // setOpenedModal("no-modal")
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
