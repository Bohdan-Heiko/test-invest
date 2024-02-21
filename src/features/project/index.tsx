import { colors } from "@/utils/constants/colors"
import { ScrollView, View } from "react-native"
import { style } from "./_style"
import { ProjectInformation } from "./_components/projectInformation"
import { ProjectCards } from "./_components/projectCards"
import { ProjectTeams } from "./_components/projectTeams"
import { ProjectReports } from "./_components/projectReports"
import { Pagination } from "@/shared/components"

const TITLE = "Таунхаус Lisopark, Буча"
const DESCRIPTION =
  "Це інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору."

const Project = () => {
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <ProjectCards />

        <ProjectInformation
          title={TITLE}
          description={DESCRIPTION}
          additionalInformation={[
            { title: "Тривалість інвестування", text: "12 місяців" },
            { title: "Ціна за 1 кв. м.", text: "589$" }
          ]}
        />
        <ProjectInformation
          title={"Місцезнаходження"}
          description={DESCRIPTION}
          titleStyle={style.title}
        />
        <ProjectInformation
          title={"Інфраструктура"}
          description={DESCRIPTION}
          titleStyle={style.title}
        />

        <ProjectInformation
          title={"Безпека та комфорт"}
          description={DESCRIPTION}
          titleStyle={style.title}
        />

        <ProjectTeams />
        <ProjectReports />
        <Pagination currentPage={1} pageSize={10} totalCount={100} />
      </View>
    </ScrollView>
  )
}

export default Project
