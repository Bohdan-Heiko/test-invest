import { Pressable, View } from "react-native"
import { FC, useEffect, useState } from "react"
import * as Clipboard from "expo-clipboard"
import { usePathname } from "expo-router"
import { TFunction } from "i18next"

import { ItemText, Paragraph, Title, VectorExpoIcons } from "@/shared/ui"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  t: TFunction
  inviteLink?: string
}

type CopyType = "allLink" | "inviteLink"

export const RieltorInformation: FC<IProps> = ({ t, inviteLink }) => {
  const pathName = usePathname()
  const [copyType, setCopytype] = useState<CopyType | null>(null)

  const handleCopyText = (text: string, type: CopyType) => {
    Clipboard.setStringAsync(text)
    setCopytype(type)
  }

  useEffect(() => {
    if (pathName) {
      setCopytype(null)
    }
  }, [pathName])

  return (
    <View style={style.rieltorInfoMainContainer}>
      <View style={style.descriptionContainer}>
        <Title style={style.descriptionTitle}>{t("Посилання")}</Title>
        <Paragraph style={style.description}>
          {t("Діліться посиланням, щоб ваші клієнти легко знайшли вас")}
        </Paragraph>
      </View>
      <View style={style.infoContainer}>
        <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>{t("Реферальне посилання")}</Title>
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.3 : 1 }]}
              onPress={() =>
                handleCopyText(`https://bober.salerow.software/${inviteLink}`, "allLink")
              }
            >
              <VectorExpoIcons
                type="Octicons"
                name={copyType === "allLink" ? "check" : "copy"}
                color={colors.blue}
                size={18}
              />
            </Pressable>
          </View>
          <ItemText>{`https://bober.salerow.software/${inviteLink}`}</ItemText>
        </View>
        <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>{t("Код для пошуку")}</Title>
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.3 : 1 }]}
              onPress={() => handleCopyText(inviteLink as string, "inviteLink")}
            >
              <VectorExpoIcons
                type="Octicons"
                name={copyType === "inviteLink" ? "check" : "copy"}
                color={colors.blue}
                size={18}
              />
            </Pressable>
          </View>
          <ItemText>{inviteLink}</ItemText>
        </View>
        {/* <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>Відсоток прибутку</Title>
            <VectorExpoIcons type='Octicons' name="copy" color={colors.blue} sizes={18} />
          </View>
          <ItemText>13%</ItemText>
        </View> */}
      </View>
    </View>
  )
}
