import { ScrollView, View } from "react-native"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"

import { style } from "../_style"

const TEXT =
  "Житловий комплекс розташований в одному з найперспективніших районів міста, забезпечуючи легкий доступ до міської інфраструктури, освітніх установ, медичних центрів і парків."

export const Builders = () => {
  return (
    <View style={style.ourProjectsContainer}>
      <Title style={style.ourProjectTitle}>Наші забудовники</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          <ProjectItem text={TEXT} link="/(tabs)/" />
          <ProjectItem text={TEXT} link="/(tabs)/" />
          <ProjectItem text={TEXT} link="/(tabs)/" />
        </View>
      </ScrollView>
    </View>
  )
}
