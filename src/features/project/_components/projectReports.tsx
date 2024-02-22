import { View } from "react-native"
import { FC } from "react"

import { Button, Devider, ItemText, Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"
import { datesHelpers } from "@/utils/helpers/dates/dates"

import { style } from "../_style"

interface IProps {
  data: BuildingsResponse["buildingReports"] | null
}

export const ProjectReports: FC<IProps> = ({ data }) => {
  if (!data) return
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
            <Button title="Зберегти" />
            <Devider />
          </View>
        </View>
      ))}
    </View>
  )
}
