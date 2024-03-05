import { ScrollView, View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { ProjectItem } from "@/shared/components"
import { ItemText, Title } from "@/shared/ui"
import { BuildingsResponse, TransformedData } from "@/types"

import { style } from "../_style"

interface IProps {
  t: TFunction
  projectsData?: TransformedData<BuildingsResponse> | undefined
}

export const MyProjects: FC<IProps> = ({ t, projectsData }) => {
  return (
    <View style={style.myProjectsContainer}>
      <Title style={style.myProjectTitle}>{t("Проекти")}</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {projectsData?.data.length ? (
            projectsData?.data.map((project) => (
              <ProjectItem
                t={t}
                key={project.id}
                text={project.description}
                title={project.title}
                imageUri={project.photos && project.photos[0].contentUrl}
              />
            ))
          ) : (
            <ItemText style={style.accuralItemNameTitle}>
              {t("Ви ще не інвестували в проекти")}
            </ItemText>
          )}
        </View>
      </ScrollView>
    </View>
  )
}
