import { ScrollView, View } from "react-native";
import { style } from "./_style";
import { LinkRedirect, Paragraph, SimpleLineIcon, Title } from "@/shared/ui";

export const Payment = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.mainContainer}>
        <View style={style.descriptionContainer}>
          <View style={style.descriptionTitleContainer}>
            <Title style={style.descriptionTitle}>Інвестування</Title>
            <SimpleLineIcon color="black" name="arrow-down" sizes={16} />
          </View>
          <Paragraph style={style.descriptionText}>
            Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють фінансові ринки,
            то слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це інвестиційні
            компанії та банки, інвестиційні фонди, хедж фонди, пенсійні фонди, консультанти та ін.
          </Paragraph>
          <Paragraph style={style.descriptionText}>
            Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють фінансові ринки,
            то слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це інвестиційні
            компанії та банки, інвестиційні фонди, хедж фонди, пенсійні фонди, консультанти та ін.
          </Paragraph>
          <LinkRedirect href="/(tabs)">Кнопка</LinkRedirect>
        </View>
      </View>
    </ScrollView>
  );
};
