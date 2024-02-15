import { ScrollView, ToastAndroid, View } from "react-native"
import { useRouter } from "expo-router"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import useActions from "@/hooks/useActions"
import { loginSchema } from "@/schemas/registration/registration.schema"
import { OrganizationInfo } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"
import { useSignInUserMutation } from "@/store/services/authInjectApi"
import { LoginBody } from "@/types/registration"
import { yupResolver } from "@hookform/resolvers/yup"

import { style } from "./_style"

export const Login = () => {
  const router = useRouter()
  const { loginUser, logoutUser } = useActions()
  const [signInUser] = useSignInUserMutation()

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields }
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema)
  })

  const handleLoginUser: SubmitHandler<LoginBody> = async (data) => {
    await signInUser(data)
      .unwrap()
      .then(loginUser)
      .then(() => router.replace("/(tabs)"))
      .catch(showToast)
  }

  const handleLogoutUser = () => {
    logoutUser()
    router.navigate("/(tabs)/")
  }

  // TEMPORARY FUNCTION
  const showToast = () => {
    ToastAndroid.show("Something wrong. Try again", ToastAndroid.SHORT)
  }

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Account section */}
      <View style={style.loginContainer}>
        <Title style={style.title}>Вхід в аккаунт</Title>
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
              iconName="HideEye"
              styles={{ marginBottom: 10 }}
              inputProps={{
                secureTextEntry: true,
                placeholder: "Пароль",
                keyboardType: "default",
                onChangeText: field.onChange
              }}
            />
          )}
        />

        {/* Specify functionality */}

        {/* <View style={style.checkBoxContainer}>
          <View style={style.checkBox}>
            <CheckBox
              value={checked}
              onPressHandler={() => setChecked((prev) => !prev)}
              iconSize={{ height: 23, width: 23 }}
            />
            <Text style={style.chekTitle}>Запам’ятати пароль</Text>
          </View>
          <LinkRedirect href="/(tabs)/registration">Забув пароль</LinkRedirect>
        </View> */}

        <Button variant="primary" title="Далі" onPress={handleSubmit(handleLoginUser)} />
        <Button variant="primary" title="Test logout" onPress={handleLogoutUser} />

        {/* <Button
          variant="secondary"
          title="Увійти через Дію"
          style={{ marginBottom: 16 }}
        /> */}
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>Не маєш аккаунту?</Paragraph>
          <LinkRedirect href="/(auth)/registration">Зареєструйся</LinkRedirect>
        </View>
      </View>
      {/* Account section */}

      <OrganizationInfo />
    </ScrollView>
  )
}
