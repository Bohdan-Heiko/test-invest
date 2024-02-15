import { ScrollView, View } from "react-native"
import { FC } from "react"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"

import { style } from "../_style"

interface IProps {
  data: BuildingsResponse[] | undefined
}

export const Buildings: FC<IProps> = ({ data }) => {
  return (
    <View style={style.ourProjectsContainer}>
      <Title style={style.ourProjectTitle}>Наші проекти</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {data?.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              text={project.description}
              imageUri={project.photos[0].file}
              link="/(auth)/registration"
            />
          ))}
          {/* <ProjectItem text={TEXT} link="/(tabs)/" />
          <ProjectItem text={TEXT} link="/(tabs)/" /> */}
        </View>
      </ScrollView>
    </View>
  )
}
