import { ScrollView, View } from "react-native"

import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, Title } from "@/shared/ui"

import { style } from "./_style"

export const RecoverPassword = () => {
  return (
    <ScrollView overScrollMode="never">
      <View style={style.mainContainer}>
        <View style={style.recoverPasswordContainer}>
          <Title style={style.recoverPasswordTitle}>Відновлення паролю</Title>
          <View style={style.recoverPasswordFormContainer}>
            <Input
              placeHolder="Пароль"
              styles={{ marginBottom: 10, position: "relative", zIndex: 1000 }}
            >
              {/* <PasswordRules /> */}
            </Input>
            <Button title="Скинути пароль" />
          </View>
        </View>
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
