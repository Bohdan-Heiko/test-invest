import { ScrollView, View } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import useActions from "@/hooks/useActions"
import { loginSchema } from "@/schemas/registration/registration.schema"
import { ErrorMessage, OrganizationInfo } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"
import { useSignInUserMutation } from "@/store/services/authInjectApi"
import { LoginBody } from "@/types/registration"
import { yupResolver } from "@hookform/resolvers/yup"

import { style } from "./_style"

export const Login = () => {
  const router = useRouter()
  const { loginUser } = useActions()
  const { t } = useTranslation("auth")

  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true)
  const [signInUser, { isError: isSignInError, isLoading: isSigninLoading }] =
    useSignInUserMutation()

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields }
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(loginSchema)
  })

  const handleLoginUser: SubmitHandler<LoginBody> = async (data) => {
    await signInUser(data)
      .unwrap()
      .then(loginUser)
      .then(() => router.replace("/(tabs)"))
      .catch(console.log)
  }

  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    >
      <View style={style.loginContainer}>
        <Title style={style.title}>{t("Вхід в аккаунт")}</Title>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              fields={{ ...field }}
              error={errors.email}
              isTouchField={!!touchedFields.email}
              inputProps={{
                placeholder: "Email",
                keyboardType: "default",
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
              iconProps={{
                type: "Octicons",
                name: isSecureTextEntry ? "eye-closed" : "eye",
                size: 25,
                style: { opacity: 0.5 }
              }}
              styles={{ marginBottom: 10 }}
              onPressIcon={() => setIsSecureTextEntry(!isSecureTextEntry)}
              inputProps={{
                secureTextEntry: isSecureTextEntry,
                placeholder: t("Пароль"),
                keyboardType: "default",
                onChangeText: field.onChange
              }}
            />
          )}
        />
        {isSignInError && <ErrorMessage message={t("Неправильний логін або пароль!")} />}

        {/* Specify functionality */}

        <View style={style.checkBoxContainer}>
          <View style={style.checkBox}>
            {/* <CheckBox
              value={checked}
              onPressHandler={() => setChecked((prev) => !prev)}
              iconSize={{ height: 23, width: 23 }}
            /> */}
            {/* <Text style={style.chekTitle}>Запам’ятати пароль</Text> */}
          </View>
          <LinkRedirect href="/(public)/(auth)/recover-password">
            {t("Забув пароль")}
          </LinkRedirect>
        </View>

        <Button
          variant="primary"
          title={t("Далі")}
          onPress={handleSubmit(handleLoginUser)}
          loading={{ isNeed: true, isLoading: isSigninLoading }}
        />

        {/* <Button
          variant="secondary"
          title="Увійти через Дію"
          style={{ marginBottom: 16 }}
        /> */}
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>{t("Не маєш аккаунту")}</Paragraph>
          <LinkRedirect href="/(public)/(auth)/registration">
            {t("Зареєструйся")}
          </LinkRedirect>
        </View>
      </View>

      <OrganizationInfo />
    </ScrollView>
  )
}
