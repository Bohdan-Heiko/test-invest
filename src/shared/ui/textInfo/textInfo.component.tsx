import { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

import { colors } from "@/constants/colors"

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
    fontFamily: "Inter500",
    fontSize: 18,
    lineHeight: 27,
    color: colors.blue,
    marginBottom: 8
  },
  textTwo: {
    fontFamily: "Inter500",
    fontSize: 18,
    lineHeight: 27
  }
})
