import { Text, View } from "react-native";
import { style } from "./_style";
import { Button, CheckBox, Input, Paragraph, Title } from "@/shared/ui";
import { useState } from "react";

export const LoginScreen = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Title style={style.title}>Вхід в аккаунт</Title>
        <Input placeHolder="Email" />
        <Input placeHolder="Пароль" iconName="HideEye" styles={{ marginBottom: 10 }} />
        <View style={style.checkBoxContainer}>
          <View style={style.checkBox}>
            <CheckBox value={checked} onPressHandler={() => setChecked((prev) => !prev)} />
            <Text style={style.chekTitle}>Запам’ятати пароль</Text>
          </View>
          <Paragraph style={style.forgotPasswordText}>Забув пароль</Paragraph>
        </View>
        <Button variant="primary" title="Далі" />
        <Button variant="secondary" title="Увійти через Дію" />
      </View>
    </View>
  );
};
