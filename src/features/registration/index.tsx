import { ScrollView, View } from "react-native"

import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"

import { style } from "./_style"

export const Registration = () => {
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Account section */}
      <View style={style.loginContainer}>
        <Title style={style.title}>Реєстрація</Title>
        <Input placeHolder="ПІБ" />
        <Input placeHolder="ІПН" />
        <Input placeHolder="Дата народження" />
        <Input placeHolder="Пошта" />
        <Input placeHolder="Пароль" iconName="HideEye" styles={{ marginBottom: 10, position: "relative", zIndex: 100 }}>
          <PasswordRules />
        </Input>
        <Input placeHolder="Повторіть пароль" />

        <Button variant="primary" title="Далі" />
        <Button variant="secondary" title="Увійти через Дію" style={{ marginBottom: 16 }} />
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
