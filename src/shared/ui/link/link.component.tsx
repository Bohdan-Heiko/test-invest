import { Pressable, StyleSheet, Text } from "react-native"
import { FC } from "react"
import { AllRoutes, Link } from "expo-router"

import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"

type TextProps = Text["props"]

interface LinkRedirectProps extends TextProps {
  href: AllRoutes
}

export const LinkRedirect: FC<LinkRedirectProps> = ({ href, style, ...otherProps }) => {
  return (
    <Link href={href as never} asChild>
      <Pressable>
        <Text style={[styles.text, style]} {...otherProps} />
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: APP_FONTS["Inter500"],
    lineHeight: 21,
    color: colors.blue,
    textAlign: "center"
  }
})
