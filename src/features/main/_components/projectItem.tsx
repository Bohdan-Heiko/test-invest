import { Image, View } from "react-native";
import { style } from "../_style";
import { LinkRedirect, Paragraph, Title } from "@/shared/ui";
import mainImg from "#/images/invests/main.jpeg";
import { FC } from "react";
import { AllRoutes } from "expo-router";

interface IProjectItemProps {
  text: string;
  link: AllRoutes;
}

export const ProjectItem: FC<IProjectItemProps> = ({ text, link }) => {
  return (
    <View style={style.ourProjectItemContainer}>
      <View style={style.ourProjectItem}>
        <Image style={style.ourProjectItemImage} source={mainImg} />
      </View>
      <View style={style.ourProjectItemInfoContainer}>
        <Title style={style.ourProjectItemInfoTitle}>ЖК Білий</Title>
        <Paragraph style={style.ourProjectItemInfoText}>
          {text}
        </Paragraph>
        <LinkRedirect href={link} style={style.ourProjectItemInfoLink}>
          Інвестувати
        </LinkRedirect>
      </View>
    </View>
  );
};
