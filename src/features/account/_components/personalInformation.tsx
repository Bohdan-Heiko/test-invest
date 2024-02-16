import { View } from "react-native"

import { ItemText, LinkRedirect, Title } from "@/shared/ui"

import { style } from "../_style"
import { UserDataResponse } from "@/types"
import { FC } from "react"
import { colors } from "@/utils/constants/colors"

interface IProps {
  data: UserDataResponse | undefined
}

export const PersonalInformation: FC<IProps> = ({ data }) => {
  return (
    <View style={style.personalInfoMainContainer}>
      <Title style={style.personalInfoTitle}>{data?.name ?? ""}</Title>

      <View style={style.personalInfoContainer}>
        <Title style={style.personalInfoContainerTitle}>Персональна інформація</Title>
        <ItemText style={style.personalInfoText}>{data?.email ?? ""}</ItemText>
        <ItemText style={style.personalInfoText}>{data?.phone ?? ""}</ItemText>
        <ItemText style={style.personalInfoText}>{data?.taxNumber ?? ""}</ItemText>
        <ItemText style={style.personalInfoText}>
          {data?.birthdate ?? ""}
        </ItemText>
      </View>

      <View style={style.yourRieltorContainer}>
        <Title style={style.yourRieltorTitle}>Ваш рієлтор</Title>
        {/* <ItemText style={style.yourRieltorInfo}>Петренко Григорій Александрович</ItemText> */}
      </View>

      <View style={style.functionsContainer}>
        <Title style={style.functionsTitle}>Функції</Title>
        <LinkRedirect
          href="/(tabs)/account"
          style={{ ...style.functionsLinks, color: colors.silver }}
        >
          Змінити пароль
        </LinkRedirect>
        <LinkRedirect
          href="/(tabs)/account"
          style={{ ...style.functionsLinks, color: colors.silver }}
        >
          Вивести кошти
        </LinkRedirect>
      </View>
    </View>
  )
}
