import { colors } from "@/constants/colors";
import { Dot, Paragraph, Title } from "@/shared/ui";
import { StyleSheet, View } from "react-native";

export const PasswordRules = () => {
  return (
    <View style={style.passwordRulesContainer}>
      <Title style={style.passwordRulesTitle}>Пароль повинен мати:</Title>
      <View style={style.passwordRules}>
        <Dot />
        <Paragraph style={style.rulesText}>тільки латинські літери</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot />
        <Paragraph style={style.rulesText}>від однієї цифри</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot />
        <Paragraph style={style.rulesText}>від 8 символів</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot />
        <Paragraph style={style.rulesText}>від 1 букви з верхнім регістром</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot />
        <Paragraph style={style.rulesText}>від 1 букви з нижнім регістром</Paragraph>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  passwordRulesContainer: {
    position: "absolute",
    top: 55,
    left: 0,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "flex-start",
    borderRadius: 10,
    width: "110%",
    flexGrow: 1,
    backgroundColor: colors.blue,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    gap: 5,
    zIndex: 100,
  },

  passwordRulesTitle: {
    color: colors.mine_shaft,
    fontSize: 18,
    lineHeight: 27,
  },

  passwordRules: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  rulesText: {
    fontSize: 14,
    lineHeight: 14,
  },
});
