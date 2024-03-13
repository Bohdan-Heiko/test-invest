import Modal from "react-native-modal"
import { FC } from "react"

interface Props {
  modalVisible: boolean
  children: JSX.Element
}

export const ModalConfig: FC<Props> = ({ modalVisible, children }) => {
  return (
    <Modal
      isVisible={modalVisible}
      avoidKeyboard={true}
      animationIn="fadeIn"
      animationOut="slideOutDown"
      animationOutTiming={0}
      backdropTransitionOutTiming={0}
    >
      {children}
    </Modal>
  )
}
