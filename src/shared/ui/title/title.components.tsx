import { StyleSheet, Text } from "react-native"

import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"

type TextProps = Text["props"]

export const Title = (props: TextProps) => {
  const { style, ...otherProps } = props

  return <Text style={[styles.text, style]} {...otherProps} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: APP_FONTS["Inter500"],
    lineHeight: 29,
    color: colors.dove_graya,
    textAlign: "center",
    flexWrap: "wrap"
  }
})
