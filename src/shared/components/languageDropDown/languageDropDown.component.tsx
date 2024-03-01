import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native"

import React, { FC, ReactElement } from "react"
import { StyleSheet } from "react-native"
import { useAppSelector } from "@/store"
import useActions from "@/hooks/useActions"
import { colors } from "@/utils/constants/colors"

interface DropdownProps {
  data: { label: string; value: string }[]
  onSelect?: (item: {
    label: string
    value: string
  }) => React.Dispatch<React.SetStateAction<undefined | { label: string; value: string }>>
  // onSelect: (item: { label: string; value: string }) => void
}

export const Dropdown: FC<DropdownProps> = ({ data, onSelect }) => {
  const { setIsOpenLanguageDropDown } = useActions()
  const { isOpen } = useAppSelector((state) => state.i18n)

  const openDropdown = (): void => {
    setIsOpenLanguageDropDown()
  }

  const onItemPress = (item: { label: string; value: string }): void => {
    setIsOpenLanguageDropDown()
  }

  const renderItem = ({
    item
  }: {
    item: { label: string; value: string }
  }): ReactElement => (
    <TouchableOpacity style={style.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
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
              data={data}
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
