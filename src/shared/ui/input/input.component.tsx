import React, { ReactElement } from "react"
import { StyleSheet, TextInput, View } from "react-native"

import { colors } from "@/constants/colors"
import { SVGIconNames } from "@/types"

import { SVGIcon } from "../svgIcon/svgIcon.component"

type ViewStyle = View["props"]["style"]
interface IProps {
  placeHolder: string
  styles?: ViewStyle
  iconName?: SVGIconNames | undefined
  children?: ReactElement
  isDotNeed?: boolean
}

export const Input: React.FC<IProps> = ({ styles, iconName, children, placeHolder, isDotNeed = true }) => {
  return (
    <View style={[style.inputContainer, styles]}>
      <TextInput
        style={{
          ...style.input
          // color: !errors.name ? styles.input.color : colors.primary,
        }}
        placeholder={placeHolder}
        placeholderTextColor={colors.silver}
        // value={value}
        // onBlur={onBlur}
        // onChangeText={onChange}
      />
      {iconName && <SVGIcon name={iconName as SVGIconNames} />}
      {children}
      {isDotNeed && <View style={style.inputDot} />}
    </View>
  )
}

const style = StyleSheet.create({
  inputContainer: {
    height: 52,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderColor: colors.silver,
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 10
  },

  input: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: "Inter500",
    fontSize: 16,
    lineHeight: 24,
    color: colors.tundora
  },

  inputDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
    marginLeft: 10
  }
})
