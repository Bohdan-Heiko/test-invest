import { ScrollView, View } from "react-native"
import { useEffect, useState } from "react"
import { router } from "expo-router"

import { ErrorMessage, OrganizationInfo } from "@/shared/components"
import { Button, Input, Paragraph, Title } from "@/shared/ui"
import { useForgotPasswordMutation } from "@/store/services/authInjectApi"

import { style } from "./_style"

export const RecoverPassword = () => {
  const [email, setEmail] = useState<string | undefined>("")

  const [
    forgotPassword,
    {
      isLoading: isForgotPasswordLoading,
      isError: isForgotPasswordError,
      isSuccess: isForgotPasswordSuccess,
      reset
    }
  ] = useForgotPasswordMutation()

  const handleSendEmail = async () => {
    if (!email) return
    else if (email && isForgotPasswordSuccess) {
      return router.replace("/(tabs)/")
    }

    await forgotPassword({ email }).unwrap()
  }

  useEffect(() => {
    if (isForgotPasswordError) {
      setTimeout(() => {
        reset()
      }, 10000)
    }
  }, [isForgotPasswordError])

  return (
    <ScrollView overScrollMode="never">
      <View style={style.mainContainer}>
        <View style={style.recoverPasswordContainer}>
          <Title style={style.recoverPasswordTitle}>Відновлення паролю</Title>
          <View style={style.recoverPasswordFormContainer}>
            {!isForgotPasswordSuccess && (
              <Input
                isDotNeed={false}
                inputProps={{
                  placeholder: "Пошта",
                  value: email,
                  onChangeText: (e) => setEmail(e)
                }}
                styles={{ marginBottom: 10, position: "relative", zIndex: 1000 }}
              />
            )}
            {isForgotPasswordSuccess && (
              <Paragraph style={style.recoverPasswordConfirmTitle}>
                На вказану вами пошту було відправлено лист з інструкцією
              </Paragraph>
            )}

            {isForgotPasswordError && <ErrorMessage message="Щось пішло не так" />}

            <Button
              onPress={handleSendEmail}
              title={isForgotPasswordSuccess ? "На головну" : "Скинути пароль"}
              loading={{ isNeed: false, isLoading: isForgotPasswordLoading }}
            />
          </View>
        </View>
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
