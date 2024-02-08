import { Image, StyleSheet, View } from "react-native";
import { LinkRedirect, Paragraph, Title } from "@/shared/ui";
import mainImg from "#/images/invests/main.jpeg";
import { FC } from "react";
import { AllRoutes } from "expo-router";
import { colors } from "@/constants/colors";

interface IProjectItemProps {
  text: string;
  link?: AllRoutes;
}

export const ProjectItem: FC<IProjectItemProps> = ({ text, link }) => {
  return (
    <View style={style.ourProjectItemContainer}>
      <View style={style.ourProjectItem}>
        <Image style={style.ourProjectItemImage} source={mainImg} />
      </View>
      <View style={style.ourProjectItemInfoContainer}>
        <Title style={style.ourProjectItemInfoTitle}>ЖК Білий</Title>
        <Paragraph style={style.ourProjectItemInfoText}>{text}</Paragraph>
       {link && <LinkRedirect href={link} style={style.ourProjectItemInfoLink}>
          Інвестувати
        </LinkRedirect>}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  ourProjectItemContainer: {
    gap: 20,
    maxWidth: 280,
    display: "flex",
    flexDirection: "column",
  },
  ourProjectTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.mine_shaft,
  },
  ourProjectItem: {
    width: 280,
    height: 220,
  },
  ourProjectItemImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 280 / 220,
    resizeMode: "stretch",
    borderRadius: 20,
  },

  ourProjectItemInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },

  ourProjectItemInfoTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.tundora,
  },
  ourProjectItemInfoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    color: colors.dove_graya,
  },
  ourProjectItemInfoLink: {
    fontSize: 20,
    lineHeight: 30,
  },
});
