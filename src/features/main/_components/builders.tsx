import { ActivityIndicator, ScrollView, View } from "react-native"
import { FC } from "react"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuidersResponse, TransformedData } from "@/types"

import { style } from "../_style"
import { colors } from "@/utils/constants/colors"

interface IProps {
  data: TransformedData<BuidersResponse> | undefined
}

export const Builders: FC<IProps> = ({ data }) => {
  return (
    <View style={style.ourProjectsContainer}>
      <View style={style.titleContainer}>
        <Title style={style.ourProjectTitle}>Наші забудовники</Title>
        {!data && <ActivityIndicator size={"small"} color={colors.blue} />}
      </View>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {data?.data?.map(({ id, description, title, photos }) => (
            <ProjectItem
              key={id}
              title={title}
              text={description}
              imageUri={photos.contentUrl}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
