import { StyleSheet, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { Button, Paragraph, Title } from "@/shared/ui"
import { SuccessModalData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  onClose: () => void
  modalData: SuccessModalData
}

export const SuccessModal: FC<Props> = ({ modalData, onClose, t }) => {
  return (
    <ModalConfig onClose={onClose} modalVisible={true}>
      <View style={style.mainContainer}>
        <View style={style.contentContainer}>
          <View style={style.titleContainer}>
            <Title style={style.title}>{t(modalData.data.title)}</Title>
            {modalData.data.subTitle && (
              <Paragraph
                style={[
                  style.paragraph,
                  {
                    textAlign:
                      modalData.data.palcingText ||
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
              style={style.btn}
              onPress={onClose}
              title={t(modalData.data.btnTitle ?? "Закрити")}
              variant={modalData.data?.btnVariant ?? "secondary"}
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
