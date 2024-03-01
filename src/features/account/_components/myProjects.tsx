import { ScrollView, View } from "react-native"
import { FC } from "react"

import { ProjectItem } from "@/shared/components"
import { ItemText, Title } from "@/shared/ui"
import { BuildingsResponse, TransformedData } from "@/types"

import { style } from "../_style"

interface IProps {
  projectsData?: TransformedData<BuildingsResponse> | undefined
}

export const MyProjects: FC<IProps> = ({ projectsData }) => {
  return (
    <View style={style.myProjectsContainer}>
      <Title style={style.myProjectTitle}>Проекти</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {projectsData?.data.length ? (
            projectsData?.data.map((project) => (
              <ProjectItem
                key={project.id}
                text={project.description}
                title={project.title}
                imageUri={project.photos && project.photos[0].contentUrl}
              />
            ))
          ) : (
            <ItemText style={[style.accuralItemNameText, {paddingHorizontal: 15}]}>
              Ви ще не інвестували в проекти
            </ItemText>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
