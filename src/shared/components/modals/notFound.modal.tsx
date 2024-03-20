import { StyleSheet, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { Button, Title } from "@/shared/ui"
import { RealtorNotFoundModal } from "@/types"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  onClose: () => void
  modalData: RealtorNotFoundModal
}

export const NotFoundModal: FC<Props> = ({ t, onClose, modalData }) => {
  return (
    <ModalConfig onClose={onClose} modalVisible={true}>
      <View style={style.mainContainer}>
        <View style={style.contentContainer}>
          <View style={style.titleContainer}>
            <Title style={style.title}>{t("Ріелтора з таким кодом не знайдено")}</Title>
          </View>
          <View style={style.btnContainer}>
            <Button
              style={style.btn}
              title={t("Ввести інший код")}
              onPress={modalData.data.handlePress}
            />
            <Button
              onPress={onClose}
              title={t("Вийти")}
              style={[style.btn, { maxWidth: "35%" }]}
              variant="secondary"
            />
          </View>
        </View>
      </View>
    </ModalConfig>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  titleContainer: {
    paddingVertical: 15,
    gap: 10
  },
  title: {
    color: colors.mine_shaft
  },
  paragraph: {
    color: colors.mine_shaft,
    fontSize: 20,
    textAlign: "center"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  btn: {
    maxWidth: "65%",
    marginBottom: 0
  }
})
