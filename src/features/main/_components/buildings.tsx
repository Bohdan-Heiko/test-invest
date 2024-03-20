import { ActivityIndicator, ScrollView, View } from "react-native"
import { FC } from "react"
import { AllRoutes } from "expo-router"
import { useTranslation } from "react-i18next"

import { useAuthContext } from "@/context/auth.context"
import { BuildingSkeleton, ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { useAppSelector } from "@/store"
import { BuildingsResponse } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  data: BuildingsResponse[] | undefined
  isLoading?: boolean
}

export const Buildings: FC<IProps> = ({ data, isLoading }) => {
  const { handlePushRoute } = useAuthContext()
  const { isRealtor } = useAppSelector((state) => state.user_data)
  const { t } = useTranslation("main")

  return (
    <View style={style.ourProjectsContainer}>
      <View style={style.titleContainer}>
        <Title style={style.ourProjectTitle}>{t("Наші проекти")}</Title>
        {isLoading && <ActivityIndicator size={"small"} color={colors.blue} />}
      </View>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {isLoading
            ? Array.from([1, 2]).map((i) => <BuildingSkeleton key={i} />)
            : data?.map((project) => {
                return (
                  <ProjectItem
                    t={t}
                    key={project.id}
                    isRealtor={isRealtor}
                    title={project.title}
                    text={project.description}
                    imageUri={project?.photos && project?.photos[0]?.contentUrl}
                    handleItemPress={() =>
                      handlePushRoute(
                        `(public)/(project)/project/${project.id}` as AllRoutes
                      )
                    }
                    handleInvestPress={() =>
                      handlePushRoute("/(private)/(payment)/payment", {
                        id: project.id,
                        title: project.title,
                        price: project.price,
                        duration: project.duration
                      })
                    }
                  />
                )
              })}
        </View>
      </ScrollView>
    </View>
  )
}
