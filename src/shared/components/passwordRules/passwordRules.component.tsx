import { Platform, Pressable, StyleSheet, View } from "react-native"
import { useTranslation } from "react-i18next"

import { Dot, Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import {
  LATIN_CHARACTER_REGEX,
  LOWER_CHARACTER_REGEX,
  NUMBER_CHARACTER_REGEX,
  UPPERCASE_CHARACTER_REGEX
} from "@/utils/constants/regex"

export const PasswordRules = ({
  value,
  onClose
}: {
  value: string | undefined
  onClose?: () => void
}) => {
  const { t } = useTranslation("passwordRules")

  return (
    <Pressable onPress={onClose} style={style.passwordRulesContainer}>
      <Title style={style.passwordRulesTitle}>{t("Пароль повинен мати")}</Title>
      <View style={style.passwordRules}>
        <Dot
          style={{
            backgroundColor:
              LATIN_CHARACTER_REGEX.test(value as string) && value?.length
                ? colors.green
                : colors.red
          }}
        />
        <Paragraph style={style.rulesText}>{t("тільки латинські літери")}</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot
          style={{
            backgroundColor: NUMBER_CHARACTER_REGEX.test(value as string)
              ? colors.green
              : colors.red
          }}
        />
        <Paragraph style={style.rulesText}>{t("від однієї цифри")}</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot
          style={{
            backgroundColor: value && value?.length >= 8 ? colors.green : colors.red
          }}
        />
        <Paragraph style={style.rulesText}>{t("від 8 символів")}</Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot
          style={{
            backgroundColor: UPPERCASE_CHARACTER_REGEX.test(value as string)
              ? colors.green
              : colors.red
          }}
        />
        <Paragraph style={style.rulesText}>
          {t("від 1 букви з верхнім регістром")}
        </Paragraph>
      </View>
      <View style={style.passwordRules}>
        <Dot
          style={{
            backgroundColor:
              LOWER_CHARACTER_REGEX.test(value as string) && value?.length
                ? colors.green
                : colors.red
          }}
        />
        <Paragraph style={style.rulesText}>
          {t("від 1 букви з нижнім регістром")}
        </Paragraph>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  passwordRulesContainer: {
    position: "absolute",
    bottom: 55,
    left: 0,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "flex-start",
    borderRadius: 10,
    width: "110%",
    flexGrow: 1,
    backgroundColor: colors.white,
    // shadowColor: "black",
    // shadowOpacity: 1,
    // shadowRadius: 20,
    // elevation: 10,
    gap: 5,
    zIndex: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 11,
    shadowColor: "#777777",
    shadowOpacity: 0.5,
    shadowOffset: { height: 3, width: 3 },
    elevation: Platform.OS === "ios" ? 1 : 10
  },

  passwordRulesTitle: {
    color: colors.mine_shaft,
    fontSize: 18,
    lineHeight: 27
  },

  passwordRules: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7
  },

  rulesText: {
    fontSize: 14,
    lineHeight: 14
  }
})
