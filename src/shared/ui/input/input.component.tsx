import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { colors } from "@/constants/colors";
import { SVGIcon } from "../svgIcon/svgIcon.component";
import { SVGIconNames } from "@/types";

interface IProps {
  placeHolder: string;
  styles?: Record<string, unknown>;
  iconName?: SVGIconNames | undefined;
  // variant?: "primary" | "secondary";
  // title?: string;
  // disabled?: boolean;
  // onPress?: () => void;
}
// type TextProps = View["props"];

export const Input: React.FC<IProps> = ({ styles, placeHolder, iconName }) => {
  // const backgroundColor = {
  //   primary: colors.blue,
  //   secondary: colors.white,
  // }[variant];

  // const titleColor = useMemo(() => {
  //   if (disabled) return colors.mine_shaft;
  //   else if (variant === "primary") return colors.white;
  //   else if (variant === "secondary") return colors.blue;
  // }, [variant, disabled]);

  return (
    <View style={{ ...style.inputContainer, ...styles }}>
      <TextInput
        style={{
          ...style.input,
          // color: !errors.name ? styles.input.color : colors.primary,
        }}
        placeholder={placeHolder}
        // placeholderTextColor={colors.deep_gray}
        // value={value}
        // onBlur={onBlur}
        // onChangeText={onChange}
      />
      {iconName && <SVGIcon name={iconName as SVGIconNames} />}
      <View style={style.inputDot} />
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderColor: colors.silver,
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 10,
  },

  input: {
    flexGrow: 1,
    flexShrink: 1,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    color: colors.tundora,
  },

  inputDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
    marginLeft: 10,
  },
});
