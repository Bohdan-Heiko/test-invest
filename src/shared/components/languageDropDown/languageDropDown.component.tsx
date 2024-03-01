import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native"

import React, { FC, ReactElement, useRef, useState } from "react"
import { VectorExpoIcons } from "@/shared/ui"
import { StyleSheet } from "react-native"

// import { colors } from "@/utils/constants/colors"

interface DropdownProps {
  label: string
  data: { label: string; value: string }[]
  onSelect: (item: { label: string; value: string }) => void
}

const Dropdown: FC<DropdownProps> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef<TouchableOpacity>(null)
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<{ label: string; value: string } | undefined>(
    undefined
  )
  const [dropdownTop, setDropdownTop] = useState(0)

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown()
  }

  const openDropdown = (): void => {
    if (DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h)
      })
    }
    setVisible(true)
  }

  const onItemPress = (item: { label: string; value: string }): void => {
    setSelected(item)
    onSelect(item)
    setVisible(false)
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
    if (!visible) return null

    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity style={style.overlay} onPress={() => setVisible(false)}>
          <View style={[style.dropdown, { top: dropdownTop }]}>
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

  return (
    <>
      <TouchableOpacity
        ref={DropdownButton}
        style={style.button}
        onPress={toggleDropdown}
      >
        <Text style={style.buttonText}>{selected?.label || label}</Text>
        <VectorExpoIcons name="caretdown" type={"AntDesign"} />
      </TouchableOpacity>
      {renderDropdown()}
    </>
  )
}

export const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    zIndex: 1
  },
  buttonText: {
    flex: 1,
    textAlign: "center"
  },
  icon: {
    marginRight: 10
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
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
    paddingVertical: 10,
    borderBottomWidth: 1
  }
})
