import { ImageBackground, View } from "react-native"

import { Button, Input, Paragraph, Title } from "@/shared/ui"

import FormBackgroundImage from "#/images/other/form-question-background.jpeg"

import { style } from "../_style"

export const CallBackForm = () => {
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
          <Title
            style={style.contentTitle}
          >{`Хочете стати інвестором,${"\n"}але є питання?`}</Title>
          <Paragraph style={style.contentText}>
            Залиште заявку на безкоштовний дзвінок, ми зв’яжемося з вами протягом 20
            хвилин
          </Paragraph>

          <View style={style.contentFormContainer}>
            <Input placeHolder="Ім’я" />
            <Input placeHolder="Ім’я" />
            <Button title="Замовити дзвінок" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
