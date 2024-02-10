import { StyleSheet, Text } from "react-native"

import { colors } from "@/constants/colors"

type TextProps = Text["props"]

export const ItemText = (props: TextProps) => {
  const { style, ...otherProps } = props

  return <Text style={[styles.text, style]} {...otherProps} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Inter500",
    lineHeight: 21,
    color: colors.tundora,
    textAlign: "center"
  }
})
