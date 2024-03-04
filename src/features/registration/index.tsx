import { ScrollView, View } from "react-native"
import DatePicker from "react-native-date-picker"
import { useRouter } from "expo-router"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import useBoolean from "@/hooks/useBoolean"
import { registrationSchema } from "@/schemas/registration/registration.schema"
import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"
import { useRegistrationUserMutation } from "@/store/services/authInjectApi"
import { RegistrationBody } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"
import { yupResolver } from "@hookform/resolvers/yup"

import { style } from "./_style"

export const Registration = () => {
  const router = useRouter()
  const { t } = useTranslation("auth")

  const [registrationUser, { isLoading: isRegistrationLoading }] =
    useRegistrationUserMutation()

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
    formState: { errors, touchedFields, dirtyFields }
  } = useForm({
    mode: "all",
    resolver: yupResolver(registrationSchema)
  })

  const onSubmit: SubmitHandler<RegistrationBody> = async (data) => {
    await registrationUser(data)
      .unwrap()
      .then(() => router.replace("/(auth)/signin"))
      .catch(console.log)
  }

  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    >
      <View style={style.loginContainer}>
        <Title style={style.title}>{t("Реєстрація")}</Title>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.name}
              isTouchField={!!dirtyFields.name}
              inputProps={{
                placeholder: t("ПІБ"),
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
              isTouchField={!!dirtyFields.taxNumber}
              inputProps={{
                placeholder: t("ІПН"),
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
                placeholder: t("Дата народження"),
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
              isTouchField={!!dirtyFields.phone}
              inputProps={{
                placeholder: t("Номер телефону"),
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
              isTouchField={!!dirtyFields.email}
              inputProps={{
                placeholder: t("Пошта"),
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
              isTouchField={!!dirtyFields.password}
              inputProps={{
                placeholder: t("Пароль"),
                secureTextEntry: true,
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
              isTouchField={!!dirtyFields.passwordConfirm}
              inputProps={{
                placeholder: t("Повторіть пароль"),
                secureTextEntry: true,
                onChangeText: field.onChange
              }}
            />
          )}
        />

        <Button
          variant="primary"
          title={t("Далі")}
          onPress={handleSubmit(onSubmit)}
          loading={{ isNeed: true, isLoading: isRegistrationLoading }}
        />
        {/* <Button
          variant="secondary"
          title="Увійти через Дію"
          style={{ marginBottom: 16 }}
        /> */}
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>{t("Вже маєш аккаунт")}</Paragraph>
          <LinkRedirect href="/(auth)/signin">{t("Увійти")}</LinkRedirect>
        </View>
      </View>

      <OrganizationInfo />
    </ScrollView>
  )
}
