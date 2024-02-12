import { StyleSheet, View } from "react-native"

import { colors } from "@/constants/colors"
import { Paragraph, TextInfo, Title } from "@/shared/ui"

export const OrganizationInfo = () => {
  return (
    <View style={style.organizationContainer}>
      <Title style={style.mainTitle}>Bober</Title>
      <TextInfo
        textOne="Адреса:"
        textTwo="м. Буча, вул. Т. Шевченка, 43, офіс 1"
        style={{ marginBottom: 20 }}
      />
      <TextInfo textOne="Телефон:" textTwo="+ 38 (097) 145 67 89" style={{ marginBottom: 20 }} />
      <TextInfo textOne="Пошта:" textTwo="BuchaProInvest@gmail.com" style={{ marginBottom: 20 }} />
      <TextInfo textOne="Години работи:" textTwo="8:00 - 18:00" style={{ marginBottom: 30 }} />
      <View style={style.infoContainer}>
        <Paragraph style={style.infoText}>© BuchaProInvest, 2023</Paragraph>
        <Paragraph style={style.infoText}>Політика конфіденціальності</Paragraph>
        <Paragraph style={style.infoText}>Договір оферти</Paragraph>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  organizationContainer: {
    flex: 1,
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: 90,
    opacity: 1
  },
  mainTitle: {
    fontFamily: "Inter500",
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
    fontFamily: "Inter500",
    fontSize: 16,
    lineHeight: 24,
    color: colors.dove_graya
  }
})
