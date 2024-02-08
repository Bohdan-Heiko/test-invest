import { View } from "react-native";
import { style } from "../_style";
import { ItemText, LinkRedirect, Title } from "@/shared/ui";

export const PersonalInformation = () => {
  return (
    <View style={style.personalInfoMainContainer}>
      <Title style={style.personalInfoTitle}>Клопотенко Іван Сергійович</Title>

      <View style={style.personalInfoContainer}>
        <Title style={style.personalInfoContainerTitle}>Персональна інформація</Title>
        <ItemText style={style.personalInfoText}>mark.zchuk@gmail.com</ItemText>
        <ItemText style={style.personalInfoText}>+38 097 485 01 63</ItemText>
        <ItemText style={style.personalInfoText}>3021524697</ItemText>
        <ItemText style={style.personalInfoText}>12.10.2001</ItemText>
      </View>

      <View style={style.yourRieltorContainer}>
        <Title style={style.yourRieltorTitle}>Ваш рієлтор</Title>
        <ItemText style={style.yourRieltorInfo}>Петренко Григорій Александрович</ItemText>
      </View>

      <View style={style.functionsContainer}>
        <Title style={style.functionsTitle}>Функції</Title>
        <LinkRedirect href="/(tabs)/account" style={style.functionsLinks}>
          Змінити пароль
        </LinkRedirect>
        <LinkRedirect href="/(tabs)/account" style={style.functionsLinks}>
          Вивести кошти
        </LinkRedirect>
      </View>
    </View>
  );
};
