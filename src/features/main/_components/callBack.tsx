import { ImageBackground, View } from "react-native"
import { useTranslation } from "react-i18next"

import { Button, Input, Paragraph, Title } from "@/shared/ui"

import FormBackgroundImage from "#/images/other/form-question-background.jpeg"

import { style } from "../_style"

export const CallBackForm = () => {
  const { t } = useTranslation("callBack")

  return (
    <View style={style.questionFormContainer}>
      <ImageBackground
        source={FormBackgroundImage}
        resizeMode="stretch"
        style={style.backgroundImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={style.backGroundDarkening} />
        <View style={style.contentContainer}>
          <Title style={style.contentTitle}>
            {t(`Хочете стати інвестором, але є питання?`)}
          </Title>
          <Paragraph style={style.contentText}>
            {t(
              "Залиште заявку на безкоштовний дзвінок, ми зв’яжемося з вами протягом 20 хвилин"
            )}
          </Paragraph>

          <View style={style.contentFormContainer}>
            <Input
              inputProps={{
                placeholder: t("Ім’я"),
                maxLength: 10,
                onChangeText: () => {}
              }}
            />
            <Input
              inputProps={{
                placeholder: t("Номер телефону"),
                maxLength: 10,
                onChangeText: () => {}
              }}
            />
            <Button title={t("Замовити дзвінок")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
