import { ScrollView, View } from "react-native"

import { ProjectItem } from "@/shared/components"
import { Title } from "@/shared/ui"

import { style } from "../_style"

const TEXT =
  "Житловий комплекс розташований в одному з найперспективніших районів міста, забезпечуючи легкий доступ до міської інфраструктури, освітніх установ, медичних центрів і парків."

export const MyProjects = () => {
  return (
    <View style={style.myProjectsContainer}>
      <Title style={style.myProjectTitle}>Наші проекти</Title>
      <ScrollView overScrollMode="never" showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={style.projectsContainer}>
          <ProjectItem text={TEXT} />
          <ProjectItem text={TEXT} />
          <ProjectItem text={TEXT} />
        </View>
      </ScrollView>
    </View>
  )
}
