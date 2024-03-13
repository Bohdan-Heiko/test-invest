import { FC } from "react"
import { useTranslation } from "react-i18next"

import { ConfrimModalData, IModalContext, RealtorModalData } from "@/types"

import { ConfirmModal } from "./confirm.modal"
import { NotFoundModal } from "./notFound.modal"
import { RealtorModal } from "./realtor.modal"

type Props = Pick<IModalContext, "modalData" | "closeModal">

export const ModalBlockRouter: FC<Props> = ({ modalData, closeModal }) => {
  const { t } = useTranslation()
  return (
    <>
      {modalData?.type
        ? {
            "realtor-modal": (
              <RealtorModal
                t={t}
                onClose={closeModal}
                modalData={modalData as RealtorModalData}
              />
            ),
            "confirm-modal": (
              <ConfirmModal
                t={t}
                onClose={closeModal}
                modalData={modalData as ConfrimModalData}
              />
            ),
            "reltor-notFound": (
              <NotFoundModal
                t={t}
                onClose={closeModal}
                modalData={modalData as ConfrimModalData}
              />
            )
          }[modalData?.type]
        : null}
    </>
  )
}
