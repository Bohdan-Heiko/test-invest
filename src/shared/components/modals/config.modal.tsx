import Modal from "react-native-modal"
import { FC } from "react"

interface Props {
  modalVisible: boolean
  children: JSX.Element
  onClose: () => void
}

export const ModalConfig: FC<Props> = ({ modalVisible, onClose, children }) => {
  return (
    <Modal
      isVisible={modalVisible}
      avoidKeyboard={true}
      animationIn="fadeIn"
      animationOut="slideOutDown"
      animationOutTiming={0}
      coverScreen={true}
      backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
    >
      {children}
    </Modal>
  )
}
