import React, { ReactElement } from "react"
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native"
import { FieldError, FieldValues } from "react-hook-form"

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
  fields?: FieldValues
  error?: FieldError | undefined
  keyboardType?: KeyboardTypeOptions | undefined
}

export const Input: React.FC<IProps> = ({
  error,
  styles,
  fields,
  iconName,
  children,
  placeHolder,
  isDotNeed = true,
  keyboardType = "default"
}) => {
  return (
    <View style={[style.inputContainer, styles, { borderColor: error ? colors.red : colors.silver }]}>
      <TextInput
        style={{
          ...style.input
        }}
        {...fields}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        placeholderTextColor={colors.silver}
        onChangeText={fields?.onChange}
      />
      {iconName && <SVGIcon name={iconName as SVGIconNames} />}
      {children}
      {isDotNeed && <View style={[style.inputDot, { backgroundColor: error ? colors.red : colors.green }]} />}
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
    // backgroundColor: "red",
    marginLeft: 10
  }
})
