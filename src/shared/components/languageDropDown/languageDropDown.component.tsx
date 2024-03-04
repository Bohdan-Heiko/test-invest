import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import React, { FC, ReactElement } from "react"
import { useDispatch } from "react-redux"

import useActions from "@/hooks/useActions"
import { useAppSelector } from "@/store"
import { mainApi } from "@/store/services/mainApi"
import { TLanguage } from "@/types"
import { colors } from "@/utils/constants/colors"
import { LANGUAGE_LABELS } from "@/utils/constants/language"
import { useTranslation } from "react-i18next"

interface DropdownProps {
  data?: TLanguage[]
  onSelect?: (language: TLanguage) => void
}

export const Dropdown: FC<DropdownProps> = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  const { setLanguage } = useActions()
  const { setIsOpenLanguageDropDown } = useActions()
  const { isOpen } = useAppSelector((state) => state.i18n)

  const onItemPress = (item: TLanguage): void => {
    setLanguage(item)
    i18n.changeLanguage(item)
    setIsOpenLanguageDropDown()
    dispatch(
      mainApi.util.invalidateTags([
        "UserPublicBuildings",
        "UserPublicBuilers",
        "UserBuildings"
      ])
    )
  }

  const renderItem = ({ item }: { item: TLanguage }): ReactElement => (
    <TouchableOpacity style={style.item} onPress={() => onItemPress(item)}>
      <Text>{LANGUAGE_LABELS[item]}</Text>
    </TouchableOpacity>
  )

  const renderDropdown = (): ReactElement | null => {
    if (!isOpen) return null

    return (
      <Modal visible={isOpen} transparent animationType="none">
        <TouchableOpacity
          style={style.overlay}
          onPress={() => setIsOpenLanguageDropDown()}
        >
          <View style={[style.dropdown]}>
            <FlatList
              data={["en-US", "uk-UA"]}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  return <>{renderDropdown()}</>
}

export const style = StyleSheet.create({
  dropdown: {
    position: "absolute",
    top: 50,
    right: 10,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5
  },
  overlay: {
    width: "100%",
    height: "100%"
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})
