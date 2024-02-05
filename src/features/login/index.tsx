import { View } from "react-native";
import { style } from "./_style";
import { Button, Title } from "@/shared/ui";
import { colors } from "@/constants/colors";

export const LoginScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Title aria-label="qwe" style={style.title}>
          Вхід в аккаунт
        </Title>


        <Button variant="primary" title="primary" />
        <Button variant="secondary" title="secondary" />
      </View>
    </View>
  );
};
