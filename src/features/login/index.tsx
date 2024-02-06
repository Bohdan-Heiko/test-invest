import { Text, View } from "react-native";
import { style } from "./_style";
import { Button, CheckBox, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui";
import { useState } from "react";

export const LoginScreen = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={style.container}>
      {/* Account section */}
      <View style={style.loginContainer}>
        <Title style={style.title}>Вхід в аккаунт</Title>
        <Input placeHolder="Email" />
        <Input placeHolder="Пароль" iconName="HideEye" styles={{ marginBottom: 10 }} />
        <View style={style.checkBoxContainer}>
          <View style={style.checkBox}>
            <CheckBox value={checked} onPressHandler={() => setChecked((prev) => !prev)} />
            <Text style={style.chekTitle}>Запам’ятати пароль</Text>
          </View>
          <LinkRedirect href="/(tabs)/two">Забув пароль</LinkRedirect>
        </View>
        <Button variant="primary" title="Далі" />
        <Button variant="secondary" title="Увійти через Дію" style={{ marginBottom: 16 }} />
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>Не маєш аккаунту?</Paragraph>
          <LinkRedirect href="/(tabs)/two">Зареєструйся</LinkRedirect>
        </View>
      </View>
      {/* Account section */}

      {/* Organization section  */}
      <View style={style.organizationContainer}>
        <Title style={style.mainTitle}>Bober</Title>
      </View>
    </View>
  );
};
