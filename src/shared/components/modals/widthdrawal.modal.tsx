import { StyleSheet, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { Button, Input, Paragraph, Title } from "@/shared/ui"
import { RealtorModalData, WithdrawalModalData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { ModalConfig } from "./config.modal"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

interface Props {
  t: TFunction
  modalData: WithdrawalModalData
  onClose: () => void
}

export const WithdrawalModal: FC<Props> = ({ t, onClose, modalData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "all",
    defaultValues: {
      value: ""
    }
  })

  return (
    <ModalConfig onClose={onClose} modalVisible={true}>
      <View style={style.mainContainer}>
        <View style={style.contentContainer}>
          <Title style={style.title}>{t("Виведення грошей")}</Title>
          <View style={{ gap: 5 }}>
            <Paragraph style={{ fontSize: 17, color: colors.dove_graya }}>
              {t("withdrawalSubTitle", {
                minWithdrawaMeaning: modalData.data.value,
                availableWithdrawal: modalData.data.balance
              })}
            </Paragraph>
            <Controller
              name="value"
              control={control}
              rules={{ required: true, min: modalData.data.value }}
              render={({ field }) => (
                <Input
                  isDotNeed={false}
                  fields={{ ...field }}
                  error={errors.value}
                  inputProps={{
                    keyboardType: "number-pad",
                    placeholder: t("Сума USD"),
                    onChangeText: field.onChange
                  }}
                />
              )}
            />

            <Button
              onPress={handleSubmit(modalData.data.handlePress)}
              title={t("Відправити")}
              style={style.btn}
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
    gap: 30,

    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 30,
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
    marginBottom: 0
  }
})
