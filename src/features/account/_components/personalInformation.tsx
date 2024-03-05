import { TouchableWithoutFeedback, View } from "react-native"
import { FC, useState } from "react"
import { TFunction } from "i18next"
import Collapsible from "react-native-collapsible"

import { ItemText, LinkRedirect, Title, VectorExpoIcons } from "@/shared/ui"
import { UserDataResponse } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  t: TFunction
  data: UserDataResponse | undefined
}

export const PersonalInformation: FC<IProps> = ({ t, data }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <View style={style.personalInfoMainContainer}>
      <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Title style={style.personalInfoTitle}>{data?.name ?? ""}</Title>
          <VectorExpoIcons type={"MaterialIcons"} name={isCollapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"} />
        </View>
      </TouchableWithoutFeedback>

      <Collapsible collapsed={isCollapsed}>
        <View style={style.personalInfoContainer}>
          <Title style={style.personalInfoContainerTitle}>
            {t("Персональна інформація")}
          </Title>
          <ItemText style={style.personalInfoText}>{data?.email ?? ""}</ItemText>
          <ItemText style={style.personalInfoText}>{data?.phone ?? ""}</ItemText>
          <ItemText style={style.personalInfoText}>{data?.taxNumber ?? ""}</ItemText>
          <ItemText style={style.personalInfoText}>{data?.birthdate ?? ""}</ItemText>
        </View>

        {!data?.isRealtor && (
          <View style={style.yourRieltorContainer}>
            <Title style={style.yourRieltorTitle}>{t("Ваш рієлтор")}</Title>
            <ItemText style={style.yourRieltorInfo}>
              {data?.realtor ? data.realtor.name : t("У вас ще немає рієлтора")}
            </ItemText>
          </View>
        )}

        <View style={style.functionsContainer}>
          <Title style={style.functionsTitle}>{t("Функції")}</Title>
          <LinkRedirect
            href="/(tabs)/account"
            style={{ ...style.functionsLinks, color: colors.silver }}
          >
            {t("Змінити пароль")}
          </LinkRedirect>
          <LinkRedirect
            href="/(tabs)/account"
            style={{ ...style.functionsLinks, color: colors.silver }}
          >
            {t("Вивести кошти")}
          </LinkRedirect>
        </View>
      </Collapsible>
    </View>
  )
}
