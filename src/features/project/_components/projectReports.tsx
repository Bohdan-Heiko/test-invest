import { View } from "react-native"
import { style } from "../_style"
import { Button, Devider, ItemText, Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"
import { FC } from "react"
import { datesHelpers } from "@/utils/helpers/dates/dates"

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
