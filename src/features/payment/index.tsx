import { ScrollView, View } from "react-native";
import { style } from "./_style";
import { ItemText, LinkRedirect, Paragraph, SVGIcon, Title } from "@/shared/ui";
import { VectorExpoIcons } from "@/shared/ui/icons/vectorExpoIcons";
import { colors } from "@/constants/colors";

export const Payment = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.mainContainer}>
        <View style={style.descriptionContainer}>
          <View style={style.descriptionTitleContainer}>
            <Title style={style.descriptionTitle}>Інвестування</Title>
            <VectorExpoIcons type="SimpleLineIcons" name="arrow-down" size={16} />
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

        <View style={style.paymentMainContainer}>
          <View style={style.titleContainer}>
            <Title style={style.title}>Оплата</Title>
            <ItemText style={style.text}>Таунхаус Lisopark, Буча</ItemText>
          </View>

          <View style={style.paymentContainer}>
            <View style={style.paymentMethodsContainer}>
              <View style={style.paymentMethod}>
                <SVGIcon name="Visa_Logo" width={40} height={25} />
                <SVGIcon name="Visa_Name" width={55} height={15} />
              </View>
              <View style={[style.paymentMethod, { justifyContent: "center" }]}>
                <SVGIcon name="Tether_Usdt" width={36} height={36} />
              </View>
            </View>
            <View style={style.investInfoContainer}>
              <VectorExpoIcons
                type="MaterialIcons"
                name="info-outline"
                size={25}
                color={colors.orange}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
