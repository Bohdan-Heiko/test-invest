import { colors } from "@/utils/constants/colors"
import { ScrollView, View } from "react-native"
import { style } from "./_style"
import { ProjectInformation } from "./_components/projectInformation"
import { ProjectCards } from "./_components/projectCards"
import { ItemText, Paragraph, Title, VectorExpoIcons } from "@/shared/ui"
import { Image } from "expo-image"
import MainImage from "#/images/invests/main.jpeg"
import { ProjectTeams } from "./_components/projectTeams"

const TITLE = "Таунхаус Lisopark, Буча"
const DESCRIPTION =
  "Це інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору."
const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

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
      </View>
    </ScrollView>
  )
}

export default Project
