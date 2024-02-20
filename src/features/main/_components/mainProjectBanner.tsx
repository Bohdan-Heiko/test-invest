import { Image, View } from "react-native"
import { FC } from "react"

import { Paragraph } from "@/shared/ui"

import mainImg from "#/images/invests/main.jpeg"

import { style } from "../_style"

interface IMainProjectBannerProps {
  text: string
}

export const MainProjectBanner: FC<IMainProjectBannerProps> = ({ text }) => {
  return (
    <View style={style.projectContainer}>
      <Image style={style.projectImg} source={mainImg} />
      <Paragraph style={style.projectText}>{text}</Paragraph>
    </View>
  )
}
