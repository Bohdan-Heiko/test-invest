import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { Button, Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  modalVisible: boolean
  onClose: () => void
}

export const InvestModal: FC<Props> = ({ t, modalVisible, onClose }) => {
  return (
    <ModalConfig modalVisible={modalVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={style.mainContainer}>
          <View style={style.contentContainer}>
            <Title style={style.title}>{t("Ви впевнені")}</Title>
            <Paragraph style={style.paragraph}>
              {t(
                "У разі скасування інвестиції усі нараховані відсотки анулюються, а сума інвестиції розблокується для виводу"
              )}
            </Paragraph>
            <View style={style.btnContainer}>
              <Button
                onPress={() => console.log("log")}
                title={t("Так")}
                style={style.btn}
              />
              <Button
                onPress={onClose}
                title={t("Ні")}
                style={style.btn}
                variant="secondary"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ModalConfig>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
  title: {
    color: colors.mine_shaft
  },
  paragraph: {
    color: colors.mine_shaft,
    fontSize: 20,
    textAlign: "auto"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  btn: {
    maxWidth: "40%",
    marginBottom: 0
  }
})
