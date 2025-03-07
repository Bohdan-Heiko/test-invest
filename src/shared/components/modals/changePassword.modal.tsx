import { StyleSheet, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

import useBoolean from "@/hooks/useBoolean"
import { Button, Input, Title } from "@/shared/ui"
import { useChangePasswordMutation } from "@/store/services/userOperationsApi"
import { IModalContext } from "@/types"
import { colors } from "@/utils/constants/colors"
import {
  LATIN_CHARACTER_REGEX,
  LOWER_CHARACTER_REGEX,
  NUMBER_CHARACTER_REGEX,
  UPPERCASE_CHARACTER_REGEX
} from "@/utils/constants/regex"
import { yupResolver } from "@hookform/resolvers/yup"

import { ErrorMessage } from "../errorMessage/errorMessage.component"
import { PasswordRules } from "../passwordRules/passwordRules.component"

import { ModalConfig } from "./config.modal"

interface Props {
  t: TFunction
  openModal: IModalContext["openModal"]
  onClose: () => void
}

export const resetPasswordSchema = yup.object({
  password: yup.string().required(),
  newPassword: yup
    .string()
    .matches(UPPERCASE_CHARACTER_REGEX, "One uppercase character")
    .matches(LOWER_CHARACTER_REGEX, "One lowercase character")
    .matches(NUMBER_CHARACTER_REGEX, "One Number")
    .matches(LATIN_CHARACTER_REGEX, "Only latin character")
    .min(8, "8 characters minimum")
    .required("Password is required")
})

type FormData = yup.InferType<typeof resetPasswordSchema>
type PasswordsType = "password" | "newPassword"

export const ChangePassword: FC<Props> = ({ t, onClose, openModal }) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<
    Record<PasswordsType, boolean>
  >({ password: true, newPassword: true })

  const {
    value: passwordRulesValue,
    setTrue: showPasswordRules,
    setFalse: hideShowPasswordRules
  } = useBoolean(false) // SHOW PASSWORD RULES

  const [
    changePassword,
    { isError: isChangePasswordError, isLoading: isChangePasswordLoading }
  ] = useChangePasswordMutation()

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    mode: "all",
    resolver: yupResolver(resetPasswordSchema)
  })

  const handleChangePasswrod: SubmitHandler<FormData> = async (data) => {
    await changePassword(data)
      .unwrap()
      .then(() =>
        openModal({ type: "success-modal", data: { title: t("Пароль успішно змінено") } })
      )
      .catch(console.log)
  }

  const onChangeSecurPasswords = (type: PasswordsType) => {
    setIsSecureTextEntry((prev) => ({ ...prev, [type]: !isSecureTextEntry[type] }))
  }

  return (
    <ModalConfig onClose={onClose} modalVisible={true}>
      <View style={style.mainContainer}>
        <View style={style.contentContainer}>
          <Title style={style.title}>{t("Зміна паролю")}</Title>
          <View style={{ gap: 5 }}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  fields={{ ...field }}
                  error={errors.password}
                  iconProps={{
                    type: "Octicons",
                    name: isSecureTextEntry.password ? "eye-closed" : "eye",
                    size: 25,
                    style: { opacity: 0.5 }
                  }}
                  isTouchField={!!dirtyFields.password}
                  inputProps={{
                    placeholder: t("Старий пароль"),
                    secureTextEntry: isSecureTextEntry.password,
                    onChangeText: field.onChange
                  }}
                  onPressIcon={() => onChangeSecurPasswords("password")}
                />
              )}
            />

            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <Input
                  fields={{ ...field }}
                  error={errors.newPassword}
                  isTouchField={!!dirtyFields.newPassword}
                  iconProps={{
                    type: "Octicons",
                    name: isSecureTextEntry.newPassword ? "eye-closed" : "eye",
                    size: 25,
                    style: { opacity: 0.5 }
                  }}
                  inputProps={{
                    placeholder: t("Новий пароль"),
                    onFocus: showPasswordRules,
                    onBlur: hideShowPasswordRules,
                    onChangeText: field.onChange,
                    secureTextEntry: isSecureTextEntry.newPassword
                  }}
                  onPressIcon={() => onChangeSecurPasswords("newPassword")}
                >
                  {passwordRulesValue?.value ? (
                    <PasswordRules onClose={hideShowPasswordRules} value={field?.value} />
                  ) : null}
                </Input>
              )}
            />

            {isChangePasswordError ? (
              <View style={style.errorContainer}>
                <ErrorMessage message={t("Щось пішло не так!")} />
              </View>
            ) : null}

            <Button
              onPress={handleSubmit(handleChangePasswrod)}
              disabled={isChangePasswordLoading}
              loading={{ isLoading: isChangePasswordLoading }}
              title={t("Зберегти")}
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
  errorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "20%"
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
