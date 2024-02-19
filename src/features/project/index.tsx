import { colors } from "@/utils/constants/colors"
import { ScrollView, View } from "react-native"
import { style } from "./_style"
import { ItemText, Paragraph, Title } from "@/shared/ui"
import { Image } from "expo-image"
import MainImage from "#/images/invests/main.jpeg"
const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

const Project = () => {
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={style.mainContainer}>
        <ScrollView
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={style.projectsContainer}>
            <View style={style.projectItem}>
              <Image
                transition={700}
                contentFit="cover"
                placeholder={blurhash}
                style={style.projectItemImage}
                source={MainImage}
              />
              <View style={style.projectItemTitleContainer}>
                <Title style={style.projectItemTitleContainerTitle}>В роботі</Title>
              </View>
            </View>
            <View style={style.projectItem}>
              <Image
                transition={700}
                contentFit="cover"
                placeholder={blurhash}
                style={style.projectItemImage}
                source={MainImage}
              />
              <View style={style.projectItemTitleContainer}>
                <Title style={style.projectItemTitleContainerTitle}>В роботі</Title>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={style.infoContainer}>
          <Title style={style.infoContainerTitle}>Таунхаус Lisopark, Буча</Title>
          <Paragraph style={style.infoContainerDescription}>
            Це інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та
            зручне місцерозташування задля створення прекрасного життєвого простору.
          </Paragraph>

          <View style={style.infoDetailsContainer}>
            <ItemText
              style={[style.infoDetailsContainerText, { color: colors.mine_shaft }]}
            >
              Тривалість інвестування
            </ItemText>
            <ItemText
              style={[
                style.infoDetailsContainerText,
                { fontSize: 16, lineHeight: 24, color: colors.blue }
              ]}
            >
              12 місяців
            </ItemText>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Project
