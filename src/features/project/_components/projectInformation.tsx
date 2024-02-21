import { ItemText, Paragraph, Title } from "@/shared/ui"
import { Text, View } from "react-native"
import { style } from "../_style"
import { colors } from "@/utils/constants/colors"
import { FC } from "react"

interface IProps {
  title: string
  description: string
  titleStyle?: Text["props"]["style"]
  additionalInformation?: { title: string; text: string }[]
}

export const ProjectInformation: FC<IProps> = ({
  title,
  titleStyle,
  description,
  additionalInformation
}) => {
  return (
    <View style={style.infoContainer}>
      <Title style={[style.infoContainerTitle, titleStyle]}>{title}</Title>
      <Paragraph style={style.infoContainerDescription}>{description} </Paragraph>

      {additionalInformation &&
        additionalInformation.map(({ title, text }, index) => (
          <View key={index} style={style.infoDetailsContainer}>
            <ItemText
              style={[style.infoDetailsContainerText, { color: colors.mine_shaft }]}
            >
              {title}
            </ItemText>
            <ItemText
              style={[
                style.infoDetailsContainerText,
                { fontSize: 16, lineHeight: 24, color: colors.blue }
              ]}
            >
              {text}
            </ItemText>
          </View>
        ))}
    </View>
  )
}
