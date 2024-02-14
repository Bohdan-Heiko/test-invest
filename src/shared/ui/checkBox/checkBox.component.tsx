import { TouchableOpacity, View } from "react-native"
import React from "react"

import { colors } from "@/utils/constants/colors"

import { SVGIcon } from "../svgIcon/svgIcon.component"

interface IProps {
  value: boolean
  iconSize: Record<"width" | "height", number>
  onPressHandler: (flag: boolean) => void
}

export const CheckBox: React.FC<IProps> = ({ value, onPressHandler, iconSize }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(!value)}>
      <View
        style={{
          height: 22,
          width: 22,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <SVGIcon
          name={value ? "CheckBox_Check" : "CheckBox_Uncheck"}
          width={iconSize.width}
          height={iconSize.height}
          color={colors.dove_graya}
        />
      </View>
    </TouchableOpacity>
  )
}
