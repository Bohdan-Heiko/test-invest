import { TouchableWithoutFeedback, View, Animated } from "react-native"
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

  const [rotationValue] = useState(new Animated.Value(0))

  const rotateIcon = () => {
    const initialValue = isCollapsed ? 0 : 1
    const finalValue = isCollapsed ? 1 : 0
    setIsCollapsed(!isCollapsed)

    rotationValue.setValue(initialValue)

    Animated.spring(rotationValue, {
      toValue: finalValue,
      tension: 5,
      friction: 4,
      useNativeDriver: true
    }).start()
  }

  const spin = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  })

  return (
    <View style={[style.personalInfoMainContainer]}>
      <TouchableWithoutFeedback onPress={rotateIcon}>
        <View style={style.userNameContainer}>
          <Title style={style.personalInfoTitle} ellipsizeMode="tail" numberOfLines={1}>
            {data?.name ?? ""}
          </Title>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <VectorExpoIcons
              type={"MaterialIcons"}
              name={"keyboard-arrow-down"}
              size={35}
            />
          </Animated.View>
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
