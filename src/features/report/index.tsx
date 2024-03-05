import { ActivityIndicator, ScrollView, View } from "react-native"
import * as Linking from "expo-linking"
import { useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"

import { OrganizationInfo } from "@/shared/components"
import { Button, ItemText, Title } from "@/shared/ui"
import { useGetBuildingReportQuery } from "@/store/services/buildingsApi"
import { colors } from "@/utils/constants/colors"
import { API_URL } from "@/utils/constants/constants"
import { datesHelpers } from "@/utils/helpers/dates/dates"
import { transformDataHelpers } from "@/utils/helpers/transformData"

import { ReportImages } from "./_components/reportImages"
import { style } from "./_style"

export const Report = () => {
  const { t } = useTranslation("report")
  const params = useLocalSearchParams<any | unknown>()
  const { building, report } = transformDataHelpers.transformLocalSearchParams(
    params.reportId
  )

  const { data: buldingReportData } = useGetBuildingReportQuery(
    { building, report },
    {
      skip: !building || !report
    }
  )

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        {!buldingReportData ? (
          <ActivityIndicator size={"large"} color={colors.blue} />
        ) : (
          <>
            <View style={style.titleContainer}>
              <Title style={style.mainTitle}>{t("Звіт про початок будівництва")}</Title>
              <ItemText style={style.startedBuildingTime}>
                {datesHelpers.dateFormated(buldingReportData.createdAt, "DD.MM.YYYY")}
              </ItemText>
            </View>
            <ReportImages data={buldingReportData.photos} />
            <Button
              title={t("Переглянути PDF")}
              onPress={() => Linking.openURL(`${API_URL}${buldingReportData.report}`)}
            />
            <OrganizationInfo />
          </>
        )}
      </View>
    </ScrollView>
  )
}
