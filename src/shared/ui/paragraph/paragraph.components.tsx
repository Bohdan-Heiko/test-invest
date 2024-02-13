import { StyleSheet, Text } from "react-native"

import { colors } from "@/utils/constants/colors"

type TextProps = Text["props"]

export const Paragraph = (props: TextProps) => {
  const { style, ...otherProps } = props

  return <Text style={[styles.text, style]} {...otherProps} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Inter500",
    lineHeight: 29,
    color: colors.tundora,
    textAlign: "center"
  }
})
