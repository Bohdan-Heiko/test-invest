import { StyleSheet, View } from "react-native"
import { useTranslation } from "react-i18next"

import { Paragraph, TextInfo, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"

export const OrganizationInfo = () => {
  const { t } = useTranslation("organization")

  return (
    <View style={style.organizationContainer}>
      <Title style={style.mainTitle}>Bober</Title>
      <TextInfo
        textOne={t("Адреса")}
        textTwo={t("м. Буча, вул. Т. Шевченка, 43, офіс 1")}
        style={{ marginBottom: 20 }}
      />
      <TextInfo
        textOne={t("Телефон")}
        textTwo="+ 38 (097) 145 67 89"
        style={{ marginBottom: 20 }}
      />
      <TextInfo
        textOne={t("Пошта")}
        textTwo="BuchaProInvest@gmail.com"
        style={{ marginBottom: 20 }}
      />
      <TextInfo
        textOne={t("Години работи")}
        textTwo="8:00 - 18:00"
        style={{ marginBottom: 30 }}
      />
      <View style={style.infoContainer}>
        <Paragraph style={style.infoText}>© BuchaProInvest, 2024</Paragraph>
        <Paragraph style={style.infoText}>{t("Політика конфіденціальності")}</Paragraph>
        <Paragraph style={style.infoText}>{t("Договір оферти")}</Paragraph>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  organizationContainer: {
    flex: 1,
    paddingVertical: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 90,
    opacity: 1
  },
  mainTitle: {
    fontFamily: APP_FONTS["Inter500"],
    color: colors.tundora,
    lineHeight: 31,
    marginBottom: 30
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20
  },
  infoText: {
    fontFamily: APP_FONTS["Inter500"],
    fontSize: 16,
    lineHeight: 24,
    color: colors.dove_graya
  }
})
