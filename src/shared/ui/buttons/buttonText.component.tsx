import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useMemo } from "react"

import { colors } from "@/utils/constants/colors"

type ViewStyleProps = View["props"]["style"]
interface IProps {
  variant?: "primary" | "secondary"
  title?: string
  disabled?: boolean
  onPress?: () => void
  style?: ViewStyleProps
  loading?: { isNeed?: boolean; isLoading: boolean }
}

export const Button: React.FC<IProps> = ({
  style,
  onPress,
  disabled,
  title = "",
  variant = "primary",
  loading = { isLoading: false, isNeed: false }
}) => {
  const titleColor = useMemo(() => {
    if (variant === "primary") return disabled ? colors.dove_graya : colors.white
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
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
          <View style={[styles.loadingContainer]}>
            {loading?.isLoading && (
              <ActivityIndicator
                size={"small"}
                style={{ position: "absolute" }}
                color={variant === "primary" ? colors.white : colors.blue}
              />
            )}
          </View>
        </View>
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
    gap: 5
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    position: "relative"
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "right"
  },
  loadingContainer: {
    alignItems: "flex-start"
  }
})
