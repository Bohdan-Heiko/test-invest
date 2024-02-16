import { ScrollView, View } from "react-native"

import { Title } from "@/shared/ui"

import { style } from "../_style"

export const MyProjects = () => {
  return (
    <View style={style.myProjectsContainer}>
      <Title style={style.myProjectTitle}>Наші проекти</Title>
      <ScrollView
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={style.projectsContainer}>
          {/* <ProjectItem text={TEXT} />
          <ProjectItem text={TEXT} />
          <ProjectItem text={TEXT} /> */}
        </View>
      </ScrollView>
    </View>
  )
}
