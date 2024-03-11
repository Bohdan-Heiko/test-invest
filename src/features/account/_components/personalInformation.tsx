import { Animated, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Collapsible from "react-native-collapsible"
import { FC, useState } from "react"
import { TFunction } from "i18next"

import { ItemText, LinkRedirect, Title, VectorExpoIcons } from "@/shared/ui"
import {  UserDataResponse } from "@/types"

import { style } from "../_style"

interface IProps {
  t: TFunction
  openLanguage: () => void
  data: UserDataResponse | undefined
}

export const PersonalInformation: FC<IProps> = ({ t, data, openLanguage }) => {
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
          <LinkRedirect href="/recover-password/" style={style.functionsLinks}>
            {t("Змінити пароль")}
          </LinkRedirect>
          <LinkRedirect href="/(tabs)/account" style={style.functionsLinks}>
            {t("Вивести кошти")}
          </LinkRedirect>
        </View>

        <View style={{ display: "flex", alignItems: "flex-start", gap: 15 }}>
          <TouchableOpacity onPress={openLanguage}>
            <Title style={style.languageContainer}>Мова</Title>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => onSetLanguage("uk-UA")}>
            <ItemText
              style={[
                style.languageTitle,
                { color: userLanguage === "uk-UA" ? colors.tundora : colors.dove_graya }
              ]}
            >
              Українська
            </ItemText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSetLanguage("en-US")}>
            <ItemText
              style={[
                style.languageTitle,
                { color: userLanguage === "en-US" ? colors.tundora : colors.dove_graya }
              ]}
            >
              English
            </ItemText>
          </TouchableOpacity> */}
        </View>
      </Collapsible>
    </View>
  )
}
