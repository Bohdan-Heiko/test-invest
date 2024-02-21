import { ItemText, Paragraph, Title, VectorExpoIcons } from "@/shared/ui"
import { View } from "react-native"
import { style } from "../_style"
import { Image } from "expo-image"
import MainImage from "#/images/invests/main.jpeg"
import { colors } from "@/utils/constants/colors"
const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

export const ProjectTeams = () => {
  return (
    <View style={style.teamsContainer}>
      <Title style={[style.teamsMainTitle, style.title]}>Команда</Title>

      <View style={style.memberContainer}>
        <Image
          transition={700}
          contentFit="cover"
          placeholder={blurhash}
          style={style.projectItemImage}
          source={MainImage}
        />

        <View style={style.socialMainContainer}>
          <View style={style.socialContainer}>
            <VectorExpoIcons
              type="FontAwesome"
              name="facebook"
              size={17}
              color={colors.white}
            />
          </View>
          <View style={style.socialContainer}>
            <VectorExpoIcons
              type="FontAwesome5"
              name="telegram-plane"
              size={17}
              color={colors.white}
            />
          </View>
          <View style={style.socialContainer}>
            <VectorExpoIcons
              type="Entypo"
              name="linkedin"
              size={17}
              color={colors.white}
            />
          </View>
        </View>
        <Title style={style.title}>Клопотенко Валерій Іванович</Title>
        <ItemText style={style.memberJobTitle}>Головний архітектор</ItemText>
        <Paragraph style={style.memberJobDescription}>
          Відповідає за керування проектами та комунікацію з клієнтами. Гарантує, що
          проекти виконуються в строк та в межах бюджету, а також враховує всі потреби та
          бажання клієнта.
        </Paragraph>
      </View>
    </View>
  )
}
