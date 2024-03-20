import { Animated, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Collapsible from "react-native-collapsible"
import { FC, useState } from "react"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

import { useModalContext } from "@/context/modal.context"
import useActions from "@/hooks/useActions"
import { ItemText, Title, VectorExpoIcons } from "@/shared/ui"
import { useAppSelector } from "@/store"
import { mainApi } from "@/store/services/mainApi"
import { useLazyFindUserRealtorQuery } from "@/store/services/userOperationsApi"
import { useChangeUserDataMutation } from "@/store/services/usersApi"
import { TLanguage, UserDataResponse } from "@/types"
import { colors } from "@/utils/constants/colors"

import { style } from "../_style"
import {
  useCreateWithdrawalMutation,
  useLazyGetMinWithdrawalMeaningQuery
} from "@/store/services/withdrawalsApi"

interface IProps {
  t: TFunction
  data: UserDataResponse | undefined
}

export const PersonalInformation: FC<IProps> = ({ t, data }) => {
  const dispatch = useDispatch()
  const { setLanguage } = useActions()
  const { openModal, closeModal } = useModalContext()
  const { i18n } = useTranslation("account")
  const { userLanguage } = useAppSelector((state) => state.i18n)
  const { id: userID, balance } = useAppSelector((state) => state.user_data)

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  const [rotationValue] = useState(new Animated.Value(0))

  const [findUserRealtor] = useLazyFindUserRealtorQuery()
  const [changeUserData] = useChangeUserDataMutation()
  const [createWithdrawal] = useCreateWithdrawalMutation()
  const [getMinWithdrawalMeaning] = useLazyGetMinWithdrawalMeaningQuery()

  const handleCreateWithdrawal = async (amount: string) => {
    await createWithdrawal({ amount })
      .unwrap()
      .then(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Виведення грошей пройшло успішно!",
            subTitle: "Кошти будуть зараховані вам найближчим часом",
            btnTitle: "Ok",
            btnVariant: "primary",
            palcingText: "center"
          }
        })
      )
      .catch(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Щось пішло не так"
          }
        })
      )
  }

  const handleGetMinWithdrawalMeaning = async () => {
    await getMinWithdrawalMeaning()
      .unwrap()
      .then((res) => {
        openModal({
          type: "withdrawal-modal",
          data: {
            value: res.value,
            balance,
            handlePress: ({ value }) => handleCreateWithdrawal(value)
          }
        })
      })
      .catch(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Щось пішло не так"
          }
        })
      )
  }

  const handleChangeUserData = async (realtorID: number) => {
    const data = {
      id: userID,
      realtor: { id: realtorID }
    }

    await changeUserData(data).unwrap().then(closeModal).catch(console.log)
  }

  const openRealtorModal = () => {
    openModal({
      type: "realtor-modal",
      data: { findRealtor: onFindRealtor }
    })
  }

  const onFindRealtor = async (link: string) => {
    await findUserRealtor(link)
      .unwrap()
      .then((res) => {
        openModal({
          type: "confirm-modal",
          data: {
            title: "Ваш рієлтор",
            subTitle: `${res.name}?`,
            handlePress: () => handleChangeUserData(res.id)
          }
        })
      })
      .catch(() => {
        openModal({
          type: "reltor-notFound",
          data: {
            handlePress: openRealtorModal
          }
        })
      })
  }

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

  const onSetLanguage = (item: TLanguage): void => {
    setLanguage(item)
    i18n.changeLanguage(item)

    dispatch(
      mainApi.util.invalidateTags([
        "UserPublicBuildings",
        "UserPublicBuilers",
        "UserBuildings"
      ])
    )
  }

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
            {!data?.realtor && (
              <TouchableOpacity onPress={openRealtorModal}>
                <ItemText style={[style.languageTitle, { color: colors.blue }]}>
                  {t("Додати")}
                </ItemText>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={style.functionsContainer}>
          <Title style={style.functionsTitle}>{t("Функції")}</Title>

          <TouchableOpacity onPress={() => openModal({ type: "changePassword-modal" })}>
            <ItemText style={[style.languageTitle, { color: colors.blue }]}>
              {t("Змінити пароль")}
            </ItemText>
          </TouchableOpacity>

          <TouchableOpacity onPressOut={handleGetMinWithdrawalMeaning}>
            <ItemText style={[style.languageTitle, { color: colors.blue }]}>
              {t("Вивести кошти")}
            </ItemText>
          </TouchableOpacity>
        </View>

        <View style={{ display: "flex", alignItems: "flex-start", gap: 15 }}>
          <Title style={style.languageContainer}>{t("Мова")}</Title>

          <TouchableOpacity onPress={() => onSetLanguage("uk-UA")}>
            <ItemText
              style={[
                style.languageTitle,
                { color: userLanguage === "uk-UA" ? colors.tundora : colors.dove_graya }
              ]}
            >
              {t("Українська")}
            </ItemText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSetLanguage("en-US")}>
            <ItemText
              style={[
                style.languageTitle,
                { color: userLanguage === "en-US" ? colors.tundora : colors.dove_graya }
              ]}
            >
              {t("Англійська")}
            </ItemText>
          </TouchableOpacity>
        </View>
      </Collapsible>
    </View>
  )
}
