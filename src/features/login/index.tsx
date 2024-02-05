import { View } from "react-native";
import { style } from "./_style";
import { Button, Input, Title } from "@/shared/ui";

export const LoginScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Title aria-label="qwe" style={style.title}>
          Вхід в аккаунт
        </Title>
        <Input placeHolder="Email" />
        <Input placeHolder="Пароль" iconName="HideEye" />
        <Button variant="primary" title="Далі" />
        <Button variant="secondary" title="Увійти через Дію" />
      </View>
    </View>
  );
};
