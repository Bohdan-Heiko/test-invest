import { Text, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

type TextProps = Text["props"];

export const Title = (props: TextProps) => {
  const { style, ...otherProps } = props;

  return <Text style={[styles.text, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Inter500",
    lineHeight: 29,
    color: colors.dove_graya,
    textAlign: "center",
  },
});
