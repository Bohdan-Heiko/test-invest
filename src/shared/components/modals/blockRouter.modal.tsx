import { FC } from "react"
import { useTranslation } from "react-i18next"

import {
  ConfrimModalData,
  IModalContext,
  RealtorModalData,
  SuccessModalData
} from "@/types"

import { ChangePassword } from "./changePassword.modal"
import { ConfirmModal } from "./confirm.modal"
import { NotFoundModal } from "./notFound.modal"
import { RealtorModal } from "./realtor.modal"
import { SuccessModal } from "./success.modal"

type Props = Pick<IModalContext, "modalData" | "closeModal" | "openModal">

export const ModalBlockRouter: FC<Props> = ({ modalData, closeModal, openModal }) => {
  const { t } = useTranslation("modal")
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
            ),
            "changePassword-modal": (
              <ChangePassword t={t} onClose={closeModal} openModal={openModal} />
            ),
            "success-modal": (
              <SuccessModal
                t={t}
                onClose={closeModal}
                modalData={modalData as SuccessModalData}
              />
            )
          }[modalData?.type]
        : null}
    </>
  )
}
