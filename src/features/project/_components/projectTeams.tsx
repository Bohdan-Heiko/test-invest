import { Pressable, View } from "react-native"
import { FC } from "react"
import { Image } from "expo-image"
import * as Linking from "expo-linking"

import { ItemText, Paragraph, Title, VectorExpoIcons } from "@/shared/ui"
import { BuildingsResponse } from "@/types"
import { colors } from "@/utils/constants/colors"
import { API_URL } from "@/utils/constants/constants"

import { style } from "../_style"

const blurhash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4"

interface IProps {
  data?: BuildingsResponse["team"] | null
}

export const ProjectTeams: FC<IProps> = ({ data }) => {
  if (!data) return

  return (
    <View style={style.teamsContainer}>
      <Title style={[style.teamsMainTitle, style.title]}>Команда</Title>

      {data.map((member, idx) => (
        <View key={idx} style={style.memberContainer}>
          <Image
            transition={700}
            contentFit="cover"
            placeholder={blurhash}
            style={style.projectItemImage}
            source={{
              uri: member.contentUrl.contentUrl
                ? `${API_URL}${member.contentUrl.contentUrl}`
                : undefined
            }}
          />

          <View style={style.socialMainContainer}>
            {member?.facebook && (
              <Pressable
                onPress={() => Linking.openURL(member.facebook ?? "")}
                style={({ pressed }) => [
                  style.socialContainer,
                  {
                    opacity: pressed ? 0.8 : 1
                  }
                ]}
              >
                <VectorExpoIcons
                  type="FontAwesome"
                  name="facebook"
                  size={17}
                  color={colors.white}
                />
              </Pressable>
            )}

            {member?.telegram && (
              <Pressable
                onPress={() => Linking.openURL(member.telegram ?? "")}
                style={({ pressed }) => [
                  style.socialContainer,
                  {
                    opacity: pressed ? 0.8 : 1
                  }
                ]}
              >
                <VectorExpoIcons
                  type="FontAwesome5"
                  name="telegram-plane"
                  size={17}
                  color={colors.white}
                />
              </Pressable>
            )}

            {member?.linkedin && (
              <Pressable
                onPress={() => Linking.openURL(member.linkedin ?? "")}
                style={({ pressed }) => [
                  style.socialContainer,
                  {
                    opacity: pressed ? 0.8 : 1
                  }
                ]}
              >
                <VectorExpoIcons
                  type="Entypo"
                  name="linkedin"
                  size={17}
                  color={colors.white}
                />
              </Pressable>
            )}
          </View>
          <Title style={style.title}>{member.name}</Title>
          <ItemText style={style.memberJobTitle}>{member.position}</ItemText>
          <Paragraph style={style.memberJobDescription}>{member.description}</Paragraph>
        </View>
      ))}
    </View>
  )
}
