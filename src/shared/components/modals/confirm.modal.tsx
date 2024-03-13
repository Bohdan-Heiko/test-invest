import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { Button, Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"
import { IModalContext, ConfrimModalData } from "@/types"

interface Props {
  t: TFunction
  modalVisible: boolean
  onClose: () => void
  modalData: ConfrimModalData
}

function isConfirmModalData(
  data: IModalContext["modalData"],
  type: "title" | "subTitle"
): data is ConfrimModalData {
  return type in data
}

export const ConfirmModal: FC<Props> = ({ t, modalVisible, onClose, modalData }) => {
  return (
    <ModalConfig modalVisible={modalVisible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={style.mainContainer}>
          <View style={style.contentContainer}>
            <View style={style.titleContainer}>
              <Title style={style.title}>{t(modalData?.data.title)}</Title>
              {isConfirmModalData(modalData, "subTitle") && (
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
                  {t(modalData.data.subTitle ?? "")}
                </Paragraph>
              )}
            </View>
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
