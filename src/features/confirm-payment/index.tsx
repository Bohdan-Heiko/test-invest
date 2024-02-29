import { ScrollView, View } from "react-native"
import { useState } from "react"
import { useLocalSearchParams } from "expo-router"

import { useAuthContext } from "@/context/auth.context"
import { ErrorMessage, OrganizationInfo } from "@/shared/components"
import { Button, CheckBox, ItemText, Paragraph, Title } from "@/shared/ui"
import { useConfirmPaymentMutation } from "@/store/services/paymentsApi"
import { colors } from "@/utils/constants/colors"

import { style } from "./_style"
import { CheckPaymentStatus } from "@/types"

type LocalParams = { uuid: string }

export const ConfrimPayment = () => {
  const { uuid, ...paymentData } = useLocalSearchParams<LocalParams>()
  const { name, email, card, phone } = paymentData as CheckPaymentStatus
  const { handlePushRoute } = useAuthContext()
  const [checkCondition, setCheckCondition] = useState<boolean>(false)

  const [
    confirmPayment,
    { isError: isConfirmPaymentError, isLoading: isConfirmPaymentLoading }
  ] = useConfirmPaymentMutation()

  const handleConfirmPayment = async () => {
    await confirmPayment({ uuid })
      .unwrap()
      .then(() => handlePushRoute("/(tabs)/account"))
      .catch(console.log)
  }

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white, paddingTop:40 }}
    >
      <View style={style.mainContainer}>
        <View style={style.confirmContainer}>
          <View>
            <Title style={style.confirmTitle}>Підтвердження платежу</Title>
            <ItemText style={style.subTitle}>Дані клієнта</ItemText>
          </View>

          <View style={style.userDataContainer}>
            <ItemText style={style.userInfo}>{name}</ItemText>
            <ItemText style={style.userInfo}>{phone}</ItemText>
            <ItemText style={style.userInfo}>{email}</ItemText>
            <ItemText style={style.userInfo}>{card}</ItemText>
          </View>

          <View style={style.descriptionContainer}>
            <View style={style.descriptionTitleContainer}>
              <Title style={style.descriptionTitle}>Договір публічної оферти</Title>
            </View>

            <ScrollView
              nestedScrollEnabled={true}
              disableScrollViewPanResponder={true}
              style={{ maxHeight: 300 }}
            >
              <View style={{ gap: 20 }}>
                <Paragraph style={style.descriptionText}>
                  Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють
                  фінансові ринки, то слід звернути увагу на галузь, яка допомагає
                  інвестувати гроші. Це інвестиційні компанії та банки, інвестиційні
                  фонди, хедж фонди, пенсійні фонди, консультанти. Якщо ви не маєте
                  фінансової освіти і бажання розбиратись, як працюють фінансові ринки, то
                  слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це
                  інвестиційні компанії та банки, інвестиційні фонди, хедж фонди, пенсійні
                  фонди, консультанти.
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  Якщо ви не маєте фінансової освіти і бажання розбиратись, як працюють
                  фінансові ринки, то слід звернути увагу на галузь, яка допомагає
                  інвестувати гроші. Це інвестиційні компанії та банки, інвестиційні
                  фонди, хедж фонди, пенсійні фонди, консультанти. Якщо ви не маєте
                  фінансової освіти і бажання розбиратись, як працюють фінансові ринки, то
                  слід звернути увагу на галузь, яка допомагає інвестувати гроші. Це
                  інвестиційні компанії та банки, інвестиційні фонди, хедж фонди, пенсійні
                  фонди, консультанти.
                </Paragraph>
              </View>
            </ScrollView>
          </View>
          <View style={style.checkBoxCoantiner}>
            <CheckBox
              value={checkCondition}
              onPressHandler={() => setCheckCondition(!checkCondition)}
              iconSize={{ height: 23, width: 23 }}
            />
            <ItemText style={style.politicCheck}>
              Я прочитав і згоден з умовами публічної оферти
            </ItemText>
          </View>

          {isConfirmPaymentError && <ErrorMessage message={"Щось пішло не так."} />}
          <Button
            title="Далі"
            disabled={!checkCondition}
            onPress={handleConfirmPayment}
            loading={{ isNeed: true, isLoading: isConfirmPaymentLoading }}
          />
        </View>
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}
