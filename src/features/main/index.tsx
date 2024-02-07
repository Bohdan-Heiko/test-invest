import { Title } from "@/shared/ui";
import { ScrollView, View } from "react-native";
import { style } from "./_style";
import { ProjectItem } from "./_components/projectItem";
import { MainProjectBanner } from "./_components/mainProjectBanner";

const TEXT =
  "Житловий комплекс розташований в одному з найперспективніших районів міста, забезпечуючи легкий доступ до міської інфраструктури, освітніх установ, медичних центрів і парків.";
const TEXT1 =
  "Модерн Хайтс - інноваційний проєкт, що об'єднує сучасний дизайн, екологічну стійкість та зручне місцерозташування задля створення прекрасного життєвого простору.";

export const Main = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.mainContainer}>
      <MainProjectBanner text={TEXT1} />
      <View style={style.ourProjectsContainer}>
        <Title style={style.ourProjectTitle}>Наші проекти</Title>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={style.projectsContainer}>
            <ProjectItem text={TEXT} link="/(tabs)/main" />
            <ProjectItem text={TEXT} link="/(tabs)/main" />
            <ProjectItem text={TEXT} link="/(tabs)/main" />
          </View>
        </ScrollView>
      </View>

      <View style={style.ourProjectsContainer}>
        <Title style={style.ourProjectTitle}>Наші забудовники</Title>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={style.projectsContainer}>
            <ProjectItem text={TEXT} link="/(tabs)/main" />
            <ProjectItem text={TEXT} link="/(tabs)/main" />
            <ProjectItem text={TEXT} link="/(tabs)/main" />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
