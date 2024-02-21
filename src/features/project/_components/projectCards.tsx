import { ScrollView, View } from "react-native"
import { style } from "../_style"
import { Image } from "expo-image"
import MainImage from "#/images/invests/main.jpeg"
import { Title } from "@/shared/ui"

const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

export const ProjectCards = () => {
  return (
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
  )
}
