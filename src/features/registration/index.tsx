import { Controller, useForm } from "react-hook-form"
import { ScrollView, View } from "react-native"
import DatePicker from "react-native-date-picker"
import * as yup from "yup"

import useBoolean from "@/hooks/useBoolean"
import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"
import {
  LATIN_CHARACTER_REGEX,
  LOWER_CHARACTER_REGEX,
  NUMBER_CHARACTER_REGEX,
  UPPERCASE_CHARACTER_REGEX
} from "@/utils/constants/regex"
import { datesHelpers } from "@/utils/helpers/dates/dates"
import { yupResolver } from "@hookform/resolvers/yup"

import { style } from "./_style"

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Nickname must be at least 1 character long")
    .max(255, "Nickname can be at most 255 characters lon")
    .required("Nickname is required"),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  birthdate: yup.string().required(),
  taxNumber: yup
    .string()
    .min(10, "Tax must be have min 10 characters")
    .max(10, "Tax must be have min 10 characters")
    .required(),
  password: yup
    .string()
    .matches(UPPERCASE_CHARACTER_REGEX, "One uppercase character")
    .matches(LOWER_CHARACTER_REGEX, "One lowercase character")
    .matches(NUMBER_CHARACTER_REGEX, "One Number")
    .matches(LATIN_CHARACTER_REGEX, "One Number")
    .min(8, "8 characters minimum")
    .required("Password is required"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")])
})

export const Registration = () => {
  const {
    value: dateModalValue,
    setTrue: openDateModal,
    setFalse: closeDateModal
  } = useBoolean(false)

  const {
    value: passwordRulesValue,
    setTrue: showPasswordRules,
    setFalse: hideShowPasswordRules
  } = useBoolean(false)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields }
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  })

  // const onSubmit = (data: any) => {
  //   console.log(data)
  // }

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Account section */}
      <View style={style.loginContainer}>
        <Title style={style.title}>Реєстрація</Title>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.name}
              isTouchField={!!touchedFields.name}
              inputProps={{
                placeholder: "ПІБ",
                keyboardType: "default",
                onChangeText: field.onChange
              }}
            />
          )}
        />

        <Controller
          name="taxNumber"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.taxNumber}
              isTouchField={!!touchedFields.taxNumber}
              inputProps={{
                placeholder: "ІПН",
                maxLength: 10,
                onChangeText: field.onChange
              }}
            />
          )}
        />

        <Controller
          name="birthdate"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.birthdate}
              isTouchField={!!touchedFields.birthdate}
              inputProps={{
                placeholder: "Дата народження",
                onPressIn: openDateModal,
                showSoftInputOnFocus: false,
                cursorColor: "transparent"
              }}
            />
          )}
        />

        <DatePicker
          modal
          open={dateModalValue.value}
          date={new Date()}
          mode={"date"}
          onConfirm={(date) => {
            setValue(
              "birthdate",
              datesHelpers.dateFormated(date.toString(), "DD.MM.YYYY")
            )
            closeDateModal()
          }}
          onCancel={closeDateModal}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.phone}
              isTouchField={!!touchedFields.phone}
              inputProps={{
                placeholder: "Номер телефону",
                onChangeText: field.onChange,
                keyboardType: "numeric"
              }}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.email}
              isTouchField={!!touchedFields.email}
              inputProps={{
                placeholder: "Пошта",
                onChangeText: field.onChange
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.password}
              isTouchField={!!touchedFields.password}
              inputProps={{
                placeholder: "Пароль",
                onPressIn: showPasswordRules,
                onFocus: showPasswordRules,
                onBlur: hideShowPasswordRules,
                onChangeText: field.onChange
              }}
            >
              {passwordRulesValue?.value ? <PasswordRules value={field?.value} /> : null}
            </Input>
          )}
        />

        <Controller
          name="passwordConfirm"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.passwordConfirm}
              isTouchField={!!touchedFields.password}
              inputProps={{
                placeholder: "Повторіть пароль",
                onChangeText: field.onChange
              }}
            />
          )}
        />
        <Button
          variant="primary"
          title="Далі"
          onPress={handleSubmit(
            (data) => console.log(data, "DATA")
            // (error) => console.log(error.password, "ERROR")
          )}
        />
        {/* <Button
          variant="secondary"
          title="Увійти через Дію"
          style={{ marginBottom: 16 }}
        /> */}
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>Вже маєш аккаунт?</Paragraph>
          <LinkRedirect href="/(tabs)">Увійти</LinkRedirect>
        </View>
      </View>
      {/* Account section */}

      <OrganizationInfo />
    </ScrollView>
  )
}
