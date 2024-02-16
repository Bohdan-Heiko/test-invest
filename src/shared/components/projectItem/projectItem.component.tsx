import { StyleSheet, View } from "react-native"
import { FC } from "react"
import { Image } from "expo-image"
import { AllRoutes } from "expo-router"

import { LinkRedirect, Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
interface IProjectItemProps {
  text: string
  title: string
  imageUri?: string
  link?: AllRoutes
}

const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

export const ProjectItem: FC<IProjectItemProps> = ({ text, link, title, imageUri }) => {
  return (
    <View style={style.ourProjectItemContainer}>
      <View style={style.ourProjectItem}>
        <Image
          style={style.ourProjectItemImage}
          source={imageUri}
          placeholder={blurhash}
          contentFit="cover"
          transition={700}
        />
      </View>
      <View style={style.ourProjectItemInfoContainer}>
        <Title style={style.ourProjectItemInfoTitle}>{title}</Title>
        <Paragraph style={style.ourProjectItemInfoText}>{text}</Paragraph>
        {link && (
          <LinkRedirect href={link} style={style.ourProjectItemInfoLink}>
            Інвестувати
          </LinkRedirect>
        )}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  ourProjectItemContainer: {
    gap: 20,
    maxWidth: 280,
    display: "flex",
    flexDirection: "column"
  },
  ourProjectTitle: {
    fontSize: 24,
    lineHeight: 42,
    color: colors.mine_shaft
  },
  ourProjectItem: {
    width: 280,
    height: 220
  },
  ourProjectItemImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 280 / 220,
    resizeMode: "stretch",
    borderRadius: 20
  },

  ourProjectItemInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8
  },

  ourProjectItemInfoTitle: {
    fontSize: 24,
    lineHeight: 36,
    color: colors.tundora
  },
  ourProjectItemInfoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    color: colors.dove_graya
  },
  ourProjectItemInfoLink: {
    fontSize: 20,
    lineHeight: 30
  }
})
