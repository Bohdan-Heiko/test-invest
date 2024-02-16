import { ScrollView, View } from "react-native"

import { OrganizationInfo } from "@/shared/components"
import {
  Button,
  CheckBox,
  Input,
  ItemText,
  LinkRedirect,
  Paragraph,
  SVGIcon,
  Title
} from "@/shared/ui"
import { VectorExpoIcons } from "@/shared/ui/icons/vectorExpoIcons"
import { colors } from "@/utils/constants/colors"

import { style } from "./_style"

export const Payment = () => {
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
    >
      <View style={style.mainContainer}>
        <View style={style.descriptionContainer}>
          <View style={style.descriptionTitleContainer}>
            <Title style={style.descriptionTitle}>Інвестування</Title>
            <VectorExpoIcons type="SimpleLineIcons" name="arrow-down" size={16} />
          </View>
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
              <View style={style.investInfoDescription}>
                <ItemText style={style.investInfoDescriptionText}>
                  Ціна за 1 кв. м. - 589$
                </ItemText>
                <ItemText
                  style={style.investInfoDescriptionText}
                >{`Завершення інвестування\n24.01.2025`}</ItemText>
                <View style={style.investInfoDescriptionPaymentCard}>
                  <ItemText>Оплата картами</ItemText>
                  <SVGIcon name="Visa_Logo" width={25} height={16} />
                  <SVGIcon name="Visa_Name" width={37} height={24} />
                </View>
              </View>
            </View>
            <Input placeHolder="Введіть суму" isDotNeed={false} />

            <View style={style.checkBoxCoantiner}>
              <CheckBox
                value={true}
                onPressHandler={() => {}}
                iconSize={{ height: 23, width: 23 }}
              />
              <ItemText style={style.politicCheck}>
                Ознайомлений з умовами використання
              </ItemText>
            </View>
            <Button title="Далі" />
          </View>
        </View>
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
