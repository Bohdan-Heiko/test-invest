import { IModalContext } from "@/types"
import { InvestModal } from "./invest.modal"
import { FC } from "react"
import { useTranslation } from "react-i18next"

type Props = Pick<IModalContext, "openedModal" | "modalData" | "closeModal">

export const ModalBlockRouter: FC<Props> = ({ modalData, closeModal, openedModal }) => {
  const { t } = useTranslation()
  return (
    <>
      {
        {
          "no-modal": <></>,
          "invest-modal": (
            <InvestModal t={t} onClose={closeModal} modalVisible={!!openedModal} />
          )
        }[openedModal]
      }
    </>
  )
}
