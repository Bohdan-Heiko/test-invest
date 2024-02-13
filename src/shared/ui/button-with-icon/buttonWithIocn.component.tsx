import React, { useMemo } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { SVGIconNames } from "@/types"
import { colors } from "@/utils/constants/colors"

import { SVGIcon } from "../svgIcon/svgIcon.component"

type ViewStyleProps = View["props"]["style"]
interface IProps {
  variant?: "primary" | "secondary"
  title?: string
  iconName: SVGIconNames
  iconColor?: string
  disabled?: boolean
  onPress?: () => void
  style?: ViewStyleProps
}

export const ButtonWithIcon: React.FC<IProps> = ({
  variant = "primary",
  title = "",
  disabled,
  iconName,
  iconColor,
  onPress,
  style
}) => {
  const titleColor = useMemo(() => {
    if (variant === "primary") return disabled ? colors.silver : colors.white
    else if (variant === "secondary") return disabled ? colors.silver : colors.blue
  }, [variant, disabled])

  const backgroundColor = useMemo(() => {
    if (variant === "primary") {
      return disabled ? colors.silver : colors.blue
    }
    if (variant === "secondary") {
      return colors.white
    }
  }, [variant, disabled])

  const borderColor = useMemo(() => {
    if (variant === "primary") {
      return disabled ? colors.silver : colors.blue
    }
    if (variant === "secondary") {
      return disabled ? colors.silver : colors.blue
    }
  }, [variant, disabled])

  return (
    <View style={[styles.container, style, { backgroundColor, borderColor }]}>
      <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.touchable}>
        <Text
          style={{
            ...styles.title,
            color: titleColor
          }}
        >
          {title}
        </Text>
        <SVGIcon name={iconName} color={iconColor} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
    marginBottom: 10,
    overflow: "hidden",
    borderColor: colors.blue,
    borderWidth: 2
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    gap: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "500"
  }
})
