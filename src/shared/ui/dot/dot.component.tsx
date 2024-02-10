import { StyleSheet, View } from "react-native"

import { colors } from "@/constants/colors"

type ViewStyle = View["props"]["style"]

export const Dot = (style?: ViewStyle) => {
  return <View style={[styles.dotContainer, style]}></View>
}

const styles = StyleSheet.create({
  dotContainer: {
    width: 6,
    height: 6,
    backgroundColor: colors.red,
    borderRadius: 3
  }
})
