import { Pressable, View } from "react-native"
import { style } from "../_style"
import { Paragraph, Title, VectorExpoIcons } from "@/shared/ui"
import { useState } from "react"

export const Descriptions = () => {
  const [showDescription, setShowDescription] = useState<boolean>(true)

  return (
    <View style={style.descriptionContainer}>
      <View style={style.descriptionTitleContainer}>
        <Title style={style.descriptionTitle}>Інвестування</Title>
        <Pressable onPress={() => setShowDescription(!showDescription)}>
          <VectorExpoIcons
            type="SimpleLineIcons"
            name={showDescription ? "arrow-down" : "arrow-up"}
            size={16}
          />
        </Pressable>
      </View>
      {showDescription && (
        <>
          <Paragraph style={style.descriptionText}>
            Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють
            фінансові ринки, то слід звернути увагу на галузь, яка допомагає інвестувати
            гроші. Це інвестиційні компанії та банки, інвестиційні фонди, хедж фонди,
            пенсійні фонди, консультанти та ін.
          </Paragraph>
          <Paragraph style={style.descriptionText}>
            Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють
            фінансові ринки, то слід звернути увагу на галузь, яка допомагає інвестувати
            гроші. Це інвестиційні компанії та банки, інвестиційні фонди, хедж фонди,
            пенсійні фонди, консультанти та ін.
          </Paragraph>
        </>
      )}
      {/* <LinkRedirect href="/(tabs)">Кнопка</LinkRedirect> */}
    </View>
  )
}
