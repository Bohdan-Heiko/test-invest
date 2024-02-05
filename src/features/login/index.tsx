import { View } from "react-native";
import { style } from "./_style";
import { Button } from "@/shared/ui";

export const LoginScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.loginContainer}>
        <Button variant="primary" title="primary" />
        <Button variant="secondary" title="secondary" />
      </View>
    </View>
  );
};
