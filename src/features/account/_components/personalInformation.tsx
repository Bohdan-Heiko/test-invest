import { View } from "react-native"
import { FC } from "react"
import { TFunction } from "i18next"

import { ItemText, LinkRedirect, Title } from "@/shared/ui"
import { UserDataResponse } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"

interface IProps {
  t: TFunction
  data: UserDataResponse | undefined
}

export const PersonalInformation: FC<IProps> = ({ t, data }) => {
  return (
    <View style={style.personalInfoMainContainer}>
      <Title style={style.personalInfoTitle}>{data?.name ?? ""}</Title>

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
    </View>
  )
}
