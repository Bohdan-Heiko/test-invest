import { Pressable, StyleSheet, Text } from "react-native"
import { FC } from "react"
import { AllRoutes, Link } from "expo-router"

import { colors } from "@/utils/constants/colors"

type TextProps = Text["props"]

interface LinkRedirectProps extends TextProps {
  href: AllRoutes
}

export const LinkRedirect: FC<LinkRedirectProps> = ({ href, style, ...otherProps }) => {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text style={[styles.text, style]} {...otherProps} />
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "Inter500",
    lineHeight: 21,
    color: colors.blue,
    textAlign: "center"
  }
})
