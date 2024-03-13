import { FC } from "react"
import { useTranslation } from "react-i18next"

import { IModalContext } from "@/types"

import { InvestModal } from "./invest.modal"
import { RealtorModal } from "./realtor.modal"

type Props = Pick<IModalContext, "openedModal" | "modalData" | "closeModal">

export const ModalBlockRouter: FC<Props> = ({ modalData, closeModal, openedModal }) => {
  const { t } = useTranslation()
  return (
    <>
      {
        {
          "no-modal": <></>,
          "realtor-modal": (
            <RealtorModal
              t={t}
              onClose={closeModal}
              modalVisible={!!openedModal}
              modalData={modalData}
            />
          ),
          "invest-modal": (
            <InvestModal t={t} onClose={closeModal} modalVisible={!!openedModal} />
          )
        }[openedModal]
      }
    </>
  )
}
