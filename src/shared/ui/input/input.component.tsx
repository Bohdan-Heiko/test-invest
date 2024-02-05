import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

interface IProps {
  variant?: "primary" | "secondary";
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
}

export const Input: React.FC<IProps> = ({ variant = "primary", title = "", disabled, onPress }) => {
  const backgroundColor = {
    primary: colors.blue,
    secondary: colors.white,
  }[variant];

  const titleColor = useMemo(() => {
    if (disabled) return colors.mine_shaft;
    else if (variant === "primary") return colors.white;
    else if (variant === "secondary") return colors.blue;
  }, [variant, disabled]);

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.touchable}>
        <Text
          style={{
            ...styles.title,
            color: titleColor,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 50,
    marginBottom: 20,
    overflow: "hidden",
    borderColor: colors.blue,
    borderWidth: 2,
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
