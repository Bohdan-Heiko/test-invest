import { ScrollView, View } from "react-native"
import { FC } from "react"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuidersResponse, TransformedData } from "@/types"

import { style } from "../_style"

interface IProps {
  data: TransformedData<BuidersResponse> | undefined
}

export const Builders: FC<IProps> = ({ data }) => {
  return (
    <View style={style.ourProjectsContainer}>
      <Title style={style.ourProjectTitle}>Наші забудовники</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {data?.data?.map(({ id, description, title, photos }) => (
            <ProjectItem
              key={id}
              text={description}
              title={title}
              imageUri={photos.file ?? photos.contentUrl}
              link="/(tabs)/"
            />
          ))}
          {/* <ProjectItem text={TEXT} link="/(tabs)/" />
          <ProjectItem text={TEXT} link="/(tabs)/" /> */}
        </View>
      </ScrollView>
    </View>
  )
}
