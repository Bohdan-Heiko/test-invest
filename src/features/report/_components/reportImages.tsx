import { ScrollView, View } from "react-native"
import { FC } from "react"
import { Image } from "expo-image"

import { BuildingReportResponse } from "@/types/buildings"
import { API_URL, blurhash } from "@/utils/constants/constants"

import { style } from "../_style"

interface IProps {
  data: BuildingReportResponse["photos"]
}

export const ReportImages: FC<IProps> = ({ data }) => {
  if (!data) return
  return (
    <ScrollView
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <View style={style.reportsImagesContainer}>
        {data?.map((photo, idx) => (
          <View key={idx} style={style.reportItem}>
            <Image
              transition={700}
              contentFit="cover"
              placeholder={blurhash}
              style={style.reportItemImage}
              source={{
                uri: photo.contentUrl ? `${API_URL}${photo.contentUrl}` : undefined
              }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
