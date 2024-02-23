import { View } from "react-native"
import { FC } from "react"
import { AllRoutes } from "expo-router"

import { useAuthContext } from "@/context/auth.context"
import { Button, Devider, ItemText, Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"

interface IProps {
  data: BuildingsResponse["buildingReports"] | null
  buildingId: string
}

export const ProjectReports: FC<IProps> = ({ data, buildingId }) => {
  if (!data) return
  const { handlePushRoute } = useAuthContext()

  return (
    <View style={style.reportsMainContainer}>
      <Title style={style.reportMainTitle}>Звіти</Title>
      {data?.map((report) => (
        <View key={report.id} style={style.reports}>
          <View style={style.reportContainer}>
            <Title style={style.title}>{report.title}</Title>
            <ItemText style={style.reportDate}>
              {datesHelpers.dateFormated(report.createdAt, "DD.MM.YYYY")}
            </ItemText>
            <Button
              title="Переглянути"
              onPress={() =>
                handlePushRoute(
                  `/(report)/building/${buildingId}/report/${report.id}` as AllRoutes
                )
              }
            />
            <Devider />
          </View>
        </View>
      ))}
    </View>
  )
}
