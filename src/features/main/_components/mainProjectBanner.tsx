import { Image, View } from "react-native"
import { FC } from "react"

import { ButtonWithIcon, Paragraph } from "@/shared/ui"

import mainImg from "#/images/invests/main.jpeg"

import { style } from "../_style"
import { useAuthContext } from "@/context/auth.context"

interface IMainProjectBannerProps {
  text: string
}

export const MainProjectBanner: FC<IMainProjectBannerProps> = ({ text }) => {
  const { handlePushRoute } = useAuthContext()

  return (
    <View style={style.projectContainer}>
      <Image style={style.projectImg} source={mainImg} />
      <Paragraph style={style.projectText}>
        Модерн Хайтс - інноваційний проєкт, що об'єднує сучасний дизайн, екологічну
        стійкість та зручне місцерозташування задля створення прекрасного життєвого
        простору.
        {text}
      </Paragraph>
      <ButtonWithIcon
        onPress={() => handlePushRoute("/(tabs)/payment")}
        title="Інвестувати"
        iconName="Arrow_Up_Right"
      />
    </View>
  )
}
