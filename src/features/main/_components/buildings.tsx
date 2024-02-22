import { ScrollView, View } from "react-native"
import { FC } from "react"
import { AllRoutes } from "expo-router"

import { useAuthContext } from "@/context/auth.context"
import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"
import { BuildingsResponse } from "@/types"

import { style } from "../_style"

interface IProps {
  data: BuildingsResponse[] | undefined
}

export const Buildings: FC<IProps> = ({ data }) => {
  const { handlePushRoute } = useAuthContext()
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
              imageUri={project?.photos && project?.photos[0]?.contentUrl}
              handleItemPress={() =>
                handlePushRoute(`/(project)/project/${project.id}` as AllRoutes)
              }
              handleInvestPress={() =>
                handlePushRoute("/(tabs)/payment", {
                  id: project.id,
                  title: project.title,
                  price: project.price,
                  duration: project.duration
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
