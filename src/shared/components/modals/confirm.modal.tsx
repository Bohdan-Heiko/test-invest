import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { Button, Paragraph, Title } from "@/shared/ui"
import { ConfrimModalData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  onClose: () => void
  modalData: ConfrimModalData
}

export const ConfirmModal: FC<Props> = ({ t, onClose, modalData }) => {
  return (
    <ModalConfig modalVisible={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={style.mainContainer}>
          <View style={style.contentContainer}>
            <View style={style.titleContainer}>
              <Title style={style.title}>{t(modalData?.data.title)}</Title>
              {modalData.data.subTitle && (
                <Paragraph
                  style={[
                    style.paragraph,
                    {
                      textAlign:
                        modalData.data.subTitle?.split(" ").length! <= 4
                          ? "center"
                          : "auto"
                    }
                  ]}
                >
                  {t(modalData.data.subTitle!)}
                </Paragraph>
              )}
            </View>
            <View style={style.btnContainer}>
              <Button
                title={t("Так")}
                style={style.btn}
                onPress={modalData.data.handlePress}
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
    maxWidth: "40%",
    marginBottom: 0
  }
})
