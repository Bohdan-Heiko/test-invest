import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View
} from "react-native"
import React, { ReactElement } from "react"
import { FieldError, FieldValues } from "react-hook-form"

import { SVGIconNames } from "@/types"
import { colors } from "@/utils/constants/colors"

import { SVGIcon } from "../svgIcon/svgIcon.component"

type ViewStyle = View["props"]["style"]

interface IProps {
  placeHolder?: string
  styles?: ViewStyle
  inputProps?: TextInputProps
  iconName?: SVGIconNames | undefined
  children?: ReactElement | null
  isDotNeed?: boolean
  fields?: FieldValues
  error?: FieldError | undefined
  isTouchField?: boolean
  keyboardType?: KeyboardTypeOptions | undefined
}

export const Input: React.FC<IProps> = ({
  error,
  styles,
  fields,
  iconName,
  children,
  isTouchField,
  isDotNeed = true,
  inputProps
}) => {
  return (
    <View
      style={[
        style.inputContainer,
        styles,
        { borderColor: error ? colors.red : colors.silver }
      ]}
    >
      <TextInput
        style={{
          ...style.input
        }}
        placeholderTextColor={colors.silver}
        {...fields}
        {...inputProps}
      />
      {iconName && <SVGIcon name={iconName as SVGIconNames} />}
      {children}
      {isDotNeed && (
        <View
          style={[
            style.inputDot,
            {
              backgroundColor: error || !isTouchField ? colors.red : colors.green
            }
          ]}
        />
      )}
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
    marginBottom: 10,
    position: "relative"
  },

  input: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: "Inter500",
    fontSize: 16,
    lineHeight: Platform.OS === "android" ? 24 : 0,
    color: colors.tundora
  },

  inputDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 10
  }
})
