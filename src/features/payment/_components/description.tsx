import { Animated, Pressable, View } from "react-native"
import Collapsible from "react-native-collapsible"
import { useState } from "react"
import { TFunction } from "i18next"

import { Paragraph, Title, VectorExpoIcons } from "@/shared/ui"

import { style } from "../_style"

export const Descriptions = ({ t }: { t: TFunction }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [rotationValue] = useState(new Animated.Value(0))

  const rotateIcon = () => {
    const initialValue = isCollapsed ? 1 : 0
    const finalValue = isCollapsed ? 0 : 1
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
    <View style={style.descriptionContainer}>
      <View style={style.descriptionTitleContainer}>
        <Title style={style.descriptionTitle}>{t("Інвестування")}</Title>
        <Pressable onPress={rotateIcon}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <VectorExpoIcons type="SimpleLineIcons" name={"arrow-up"} size={16} />
          </Animated.View>
        </Pressable>
      </View>
      <Collapsible collapsed={isCollapsed} style={style.textContainer}>
        <Paragraph style={style.descriptionText}>
          {t(
            "Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють фінансові ринки, то слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це інвестиційні компанії та банки, інвестиційні фонди, хедж фонди, пенсійні фонди, консультанти та ін."
          )}
        </Paragraph>
        <Paragraph style={style.descriptionText}>
          {t(
            "В таких компаніях працюють професіонали, які розбираються в фінансах та інвестиціях. Вони залучають гроші роздрібних інвесторів і компаній та інвестують їх, щоб заробити гроші для своїх клієнтів. Ця діяльність ліцензується і працівники повинні професійно розумітись на своїй діяльності і ставити інтереси клієнтів понад своїх."
          )}
        </Paragraph>
        <Paragraph style={style.descriptionText}>
          {t(
            "Існують компанії, які надають доступ до торгівельних платформ, а люди самостійно торгують і беруть на себе всі ризики. У випадку інституціональних інвесторів, їх завдання зробити все можливе, щоб клієнт отримав найкращий результат відповідно до ступеня ризику, на який він згодний."
          )}
        </Paragraph>
      </Collapsible>
      {/* )} */}
    </View>
  )
}
