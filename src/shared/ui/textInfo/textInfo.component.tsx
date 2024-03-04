import { StyleSheet, Text, View } from "react-native"
import { FC } from "react"

import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"

type TextProps = View["props"]["style"]

interface ItextInfoProps {
  style?: TextProps
  textOne: string
  textTwo: string
}

export const TextInfo: FC<ItextInfoProps> = ({ textOne, textTwo, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textOne}>{textOne}</Text>
      <Text style={styles.textTwo}>{textTwo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  textOne: {
    fontFamily: APP_FONTS["Inter500"],
    fontSize: 18,
    lineHeight: 27,
    color: colors.blue,
    marginBottom: 8
  },
  textTwo: {
    fontFamily: APP_FONTS["Inter500"],
    fontSize: 18,
    lineHeight: 27
  }
})
