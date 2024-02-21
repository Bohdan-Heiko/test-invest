import { View } from "react-native"
import { style } from "../_style"
import { Button, Devider, ItemText, Title } from "@/shared/ui"

export const ProjectReports = () => {
  return (
    <View style={style.reportsMainContainer}>
      <Title style={style.reportMainTitle}>Звіти</Title>
      <View style={style.reports}>
        <View style={style.reportContainer}>
          <Title style={style.title}>Звіт про витрати на перший триместр будування</Title>
          <ItemText style={style.reportDate}>12.10.2023</ItemText>
          <Button title="Зберегти" />
          <Devider />
        </View>
      </View>
    </View>
  )
}
