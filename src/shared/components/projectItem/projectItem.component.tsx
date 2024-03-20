import { Pressable, StyleSheet, Text, View } from "react-native"
import { FC } from "react"
import { Image } from "expo-image"
import { AllRoutes } from "expo-router"
import { TFunction } from "i18next"

import { Paragraph, Title } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"
import { API_URL } from "@/utils/constants/constants"
interface IProjectItemProps {
  t: TFunction
  text: string
  title: string
  imageUri?: string
  isRealtor?: boolean
  handleItemPress?: () => void
  handleInvestPress?: () => AllRoutes | undefined
}

const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

export const ProjectItem: FC<IProjectItemProps> = ({
  t,
  text,
  title,
  imageUri,
  isRealtor,
  handleItemPress,
  handleInvestPress
}) => {
  return (
    <Pressable onPress={handleItemPress} style={style.ourProjectItemContainer}>
      <View style={style.ourProjectItem}>
        <Image
          style={style.ourProjectItemImage}
          source={imageUri ? `${API_URL}${imageUri}` : undefined}
          placeholder={blurhash}
          contentFit="cover"
          transition={700}
        />
      </View>
      <View style={style.ourProjectItemInfoContainer}>
        <Title style={style.ourProjectItemInfoTitle}>{title}</Title>
        <Paragraph style={style.ourProjectItemInfoText}>{text}</Paragraph>
        {handleInvestPress && (
          <Pressable
            onPress={handleInvestPress}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgba(14, 163, 204, 0.2)" : "white",
                borderRadius: 10,
                paddingHorizontal: 5
              }
            ]}
          >
            {!isRealtor && (
              <Text style={style.ourProjectItemInfoLink}>{t("Інвестувати")}</Text>
            )}
          </Pressable>
        )}
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  ourProjectItemContainer: {
    gap: 20,
    maxWidth: 280,
    maxHeight: 530,
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
    color: colors.tundora,
    textAlign: "left"
  },
  ourProjectItemInfoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    color: colors.dove_graya
  },
  ourProjectItemInfoLink: {
    fontSize: 20,
    lineHeight: 30,
    color: colors.blue
  }
})
