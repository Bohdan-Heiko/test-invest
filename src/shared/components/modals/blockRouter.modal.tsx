import { FC } from "react"
import { useTranslation } from "react-i18next"

import { IModalContext } from "@/types"

import { ChangePassword } from "./changePassword.modal"
import { ConfirmModal } from "./confirm.modal"
import { NotFoundModal } from "./notFound.modal"
import { RealtorModal } from "./realtor.modal"
import { SuccessModal } from "./success.modal"
import { WithdrawalModal } from "./widthdrawal.modal"

type Props = Pick<IModalContext, "modalData" | "closeModal" | "openModal">

export const ModalBlockRouter: FC<Props> = ({ modalData, closeModal, openModal }) => {
  const { t } = useTranslation("modal")

  switch (modalData?.type) {
    case "realtor-modal":
      return <RealtorModal t={t} onClose={closeModal} modalData={modalData} />
    case "confirm-modal":
      return <ConfirmModal t={t} onClose={closeModal} modalData={modalData} />

    case "reltor-notFound":
      return <NotFoundModal t={t} onClose={closeModal} modalData={modalData} />

    case "changePassword-modal":
      return <ChangePassword t={t} onClose={closeModal} openModal={openModal} />

    case "success-modal":
      return <SuccessModal t={t} onClose={closeModal} modalData={modalData} />

    case "withdrawal-modal":
      return <WithdrawalModal t={t} onClose={closeModal} modalData={modalData} />

    default:
      return null
  }
}
