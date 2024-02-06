import { ScrollView, Text, View } from "react-native";
import { style } from "./_style";
import { Button, CheckBox, Input, LinkRedirect, Paragraph, TextInfo, Title } from "@/shared/ui";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
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
        <TextInfo
          textOne="Адреса:"
          textTwo="м. Буча, вул. Т. Шевченка, 43, офіс 1"
          style={{ marginBottom: 20 }}
        />
        <TextInfo textOne="Телефон:" textTwo="+ 38 (097) 145 67 89" style={{ marginBottom: 20 }} />
        <TextInfo
          textOne="Пошта:"
          textTwo="BuchaProInvest@gmail.com"
          style={{ marginBottom: 20 }}
        />
        <TextInfo textOne="Години работи:" textTwo="8:00 - 18:00" style={{ marginBottom: 30 }} />
        <View style={style.infoContainer}>
          <Paragraph style={style.infoText}>© BuchaProInvest, 2023</Paragraph>
          <Paragraph style={style.infoText}>Політика конфіденціальності</Paragraph>
          <Paragraph style={style.infoText}>Договір оферти</Paragraph>
        </View>
      </View>
    </ScrollView>
  );
};
