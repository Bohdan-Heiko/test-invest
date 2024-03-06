import { Pressable, View } from "react-native"
import { useState } from "react"
import { TFunction } from "i18next"

import { Paragraph, Title, VectorExpoIcons } from "@/shared/ui"

import { style } from "../_style"

export const Descriptions = ({ t }: { t: TFunction }) => {
  const [showDescription, setShowDescription] = useState<boolean>(true)

  return (
    <View style={style.descriptionContainer}>
      <View style={style.descriptionTitleContainer}>
        <Title style={style.descriptionTitle}>{t("Інвестування")}</Title>
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
            {t(
              "Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють фінансові ринки, то слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це інвестиційні компанії та банки, інвестиційні фонди, хедж фонди, пенсійні фонди, консультанти та ін."
            )}
          </Paragraph>
          <Paragraph style={style.descriptionText}>
            {t(
              "Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють фінансові ринки, то слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це інвестиційні компанії та банки, інвестиційні фонди, хедж фонди, пенсійні фонди, консультанти та ін."
            )}
          </Paragraph>
        </>
      )}
      {/* <LinkRedirect href="/(tabs)">Кнопка</LinkRedirect> */}
    </View>
  )
}
