import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SVGIcon } from "../svgIcon/svgIcon.component";
import { colors } from "@/constants/colors";

interface IProps {
  value: boolean;
  onPressHandler: (flag: boolean) => void;
}

export const CheckBox: React.FC<IProps> = ({ value, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(!value)}>
      <View
        style={{
          height: 22,
          width: 22,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SVGIcon
          name={value ? "CheckBox_Check" : "CheckBox_Uncheck"}
          width={14}
          height={14}
          color={colors.dove_graya}
        />
      </View>
    </TouchableOpacity>
  );
};
