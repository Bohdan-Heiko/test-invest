import { FC } from "react"
import Modal from "react-native-modal"

interface Props {
  modalVisible: boolean
  children: JSX.Element
}

export const ModalConfig: FC<Props> = ({ modalVisible, children }) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="fadeIn"
      animationOut="slideOutDown"
      animationOutTiming={0}
      backdropTransitionOutTiming={0}
    >
      {children}
    </Modal>
  )
}
