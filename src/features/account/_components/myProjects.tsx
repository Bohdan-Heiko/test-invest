import { ActivityIndicator, ScrollView, View } from "react-native"
import { FC } from "react"
import { router } from "expo-router"
import { TFunction } from "i18next"

import { ProjectItem } from "@/shared/components"
import { ItemText, Title } from "@/shared/ui"
import { BuildingsResponse, TransformedData } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  t: TFunction
  isLoading: boolean
  projectsData?: TransformedData<BuildingsResponse> | undefined
}

export const MyProjects: FC<IProps> = ({ t, isLoading, projectsData }) => {
  return (
    <View style={style.myProjectsContainer}>
      <View style={style.titleContainer}>
        <Title style={style.myProjectTitle}>{t("Проекти")}</Title>
        <ActivityIndicator
          size={"small"}
          color={colors.blue}
          style={{ display: isLoading ? "flex" : "none" }}
        />
      </View>
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
                handleItemPress={() => router.push(`/(project)/project/${project.id}`)}
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
