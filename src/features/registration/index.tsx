import { Controller, useForm } from "react-hook-form"
import { ScrollView, View } from "react-native"
import DatePicker from "react-native-date-picker"

import useBoolean from "@/hooks/useBoolean"
import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"

import { datesHelpers } from "@/utils/helpers/dates/dates"
import { yupResolver } from "@hookform/resolvers/yup"

import { style } from "./_style"
import { registrationSchema } from "@/schemas/registration/registration.schema"
import { useRegistrationUserMutation } from "@/store/services/authInjectApi"
import { Redirect } from "expo-router"

export const Registration = () => {
  const [registration] = useRegistrationUserMutation()

  const {
    value: dateModalValue,
    setTrue: openDateModal,
    setFalse: closeDateModal
  } = useBoolean(false) // OPEN DATEPICKER

  const {
    value: passwordRulesValue,
    setTrue: showPasswordRules,
    setFalse: hideShowPasswordRules
  } = useBoolean(false) // SHOW PASSWORD RULES

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields }
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registrationSchema)
  })

  const onSubmit = async (data: any) => {
    await registration(data)
      .unwrap()
      .then(() => <Redirect href="/(tabs)/login" />)
      .catch(console.log)
  }

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

        <Button variant="primary" title="Далі" onPress={handleSubmit(onSubmit)} />
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
