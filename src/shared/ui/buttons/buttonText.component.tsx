import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

interface IProps {
  variant?: "primary" | "secondary";
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<IProps> = ({
  variant = "primary",
  title = "",
  disabled,
  onPress,
}) => {
  const titleColor = useMemo(() => {
    if (variant === "primary") return disabled ? colors.silver : colors.white;
    else if (variant === "secondary") return disabled ? colors.silver : colors.blue;
  }, [variant, disabled]);

  const backgroundColor = useMemo(() => {
    if (variant === "primary") {
      return disabled ? colors.silver : colors.blue;
    }
    if (variant === "secondary") {
      return colors.white;
    }
  }, [variant, disabled]);

  const borderColor = useMemo(() => {
    if (variant === "primary") {
      return disabled ? colors.silver : colors.blue;
    }
    if (variant === "secondary") {
      return disabled ? colors.silver : colors.blue;
    }
  }, [variant, disabled]);

  return (
    <View style={{ ...styles.container, backgroundColor, borderColor }}>
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
