import { colors } from "@/constants/colors";
import { Link, AllRoutes } from "expo-router";
import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type TextProps = Text["props"];

interface LinkRedirectProps extends TextProps {
  href: AllRoutes;
}

export const LinkRedirect: FC<LinkRedirectProps> = ({ href, style, ...otherProps }) => {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text style={[styles.text, style]} {...otherProps} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Inter500',
    lineHeight: 21,
    color: colors.blue,
    textAlign: "center",
  },
});
