import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View
} from "react-native"
import React, { ReactElement } from "react"
import { FieldError, FieldValues } from "react-hook-form"

import { BarIconProps, IconType } from "@/types"
import { colors } from "@/utils/constants/colors"

import { VectorExpoIcons } from "../icons/vectorExpoIcons"

type ViewStyle = View["props"]["style"]

interface IProps {
  styles?: ViewStyle
  inputProps?: TextInputProps
  iconProps?: BarIconProps<IconType>
  children?: ReactElement | null
  isDotNeed?: boolean
  fields?: FieldValues
  error?: FieldError | undefined
  isTouchField?: boolean
  onPressIcon?: () => void
}

export const Input: React.FC<IProps> = ({
  error,
  styles,
  fields,
  children,
  isTouchField,
  isDotNeed = true,
  inputProps,
  iconProps,
  onPressIcon
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
      {iconProps && (
        <Pressable onPress={onPressIcon}>
          <VectorExpoIcons {...iconProps} />
        </Pressable>
      )}
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
