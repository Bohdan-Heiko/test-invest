import { ScrollView, View } from "react-native"
import { style } from "../_style"
import { Image } from "expo-image"
import MainImage from "#/images/invests/main.jpeg"
import { Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"
import { FC } from "react"
import { API_URL } from "@/utils/constants/constants"

const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

interface IProps {
  data?: BuildingsResponse["photos"]
  status?: BuildingsResponse["status"]
}

export const ProjectCards: FC<IProps> = ({ data, status }) => {
  return (
    <ScrollView
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <View style={style.projectsContainer}>
        {data?.map((photo, idx) => (
          <View key={idx} style={style.projectItem}>
            <Image
              transition={700}
              contentFit="cover"
              placeholder={blurhash}
              style={style.projectItemImage}
              source={{
                uri: photo.contentUrl ? `${API_URL}${photo.contentUrl}` : undefined
              }}
            />
            <View style={style.projectItemTitleContainer}>
              <Title style={style.projectItemTitleContainerTitle}>{status}</Title>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
