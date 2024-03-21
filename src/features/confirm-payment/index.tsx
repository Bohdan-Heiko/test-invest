import { ScrollView, View } from "react-native"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import { useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { useTranslation } from "react-i18next"

import { useAuthContext } from "@/context/auth.context"
import { ErrorMessage, OrganizationInfo } from "@/shared/components"
import {
  Button,
  CheckBox,
  ItemText,
  Paragraph,
  Title,
  VectorExpoIcons
} from "@/shared/ui"
import { useAppSelector } from "@/store"
import { useConfirmPaymentMutation } from "@/store/services/paymentsApi"
import { colors } from "@/utils/constants/colors"

import { style } from "./_style"

type LocalParams = { uuid: string }

const ConfrimPayment = () => {
  const { t } = useTranslation("confirmPayment")
  const { uuid } = useLocalSearchParams<LocalParams>()
  const { taxNumber, name, phone, email, birthdate } = useAppSelector(
    (state) => state.user_data
  )
  const { handleReplaceRoute } = useAuthContext()
  const [checkCondition, setCheckCondition] = useState<boolean>(false)

  const [
    confirmPayment,
    { isError: isConfirmPaymentError, isLoading: isConfirmPaymentLoading }
  ] = useConfirmPaymentMutation()

  const handleConfirmPayment = async () => {
    await confirmPayment({ uuid })
      .unwrap()
      .then(() => handleReplaceRoute("/(tabs)/account"))
      .catch(console.log)
  }

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white, paddingTop: 40 }}
    >
      <View style={style.mainContainer}>
        <View style={style.confirmContainer}>
          <View>
            <Title style={style.confirmTitle}>{t("Підтвердження платежу")}</Title>
            <ItemText style={style.subTitle}>{t("Дані клієнта")}</ItemText>
          </View>

          <View style={style.userDataContainer}>
            <ItemText style={style.userInfo}>{name}</ItemText>
            <ItemText style={style.userInfo}>{phone}</ItemText>
            <ItemText style={style.userInfo}>{email}</ItemText>
            <ItemText style={style.userInfo}>{taxNumber}</ItemText>
            <ItemText style={style.userInfo}>{birthdate}</ItemText>
          </View>

          <View style={style.descriptionContainer}>
            <View style={style.descriptionTitleContainer}>
              <Title style={style.descriptionTitle}>{t("ПУБЛІЧНА ОФЕРТА")}</Title>
            </View>

            <ScrollView
              nestedScrollEnabled={true}
              disableScrollViewPanResponder={true}
              style={{ maxHeight: 300 }}
            >
              <View style={{ gap: 20 }}>
                <Paragraph style={style.descriptionText}>
                  {t(
                    "щодо укладення договору про надання невиключних ліцензій на використання сервісу контролю за об’єктами будівництва"
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  {t(
                    "За цією Офертою Товариство з обмеженою відповідальністю «Сейлроу» (далі – Ліцензіар) пропонує необмеженому колу фізичних осіб укласти договір про надання невиключних ліцензій на використання сервісу контролю за об’єктами будівництва."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  1 {t(`ПРЕДМЕТ ДОГОВОРУ`)}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  1.1{" "}
                  {t(
                    `Ліцензіар надає фізичній особі (далі – Ліцензіат) невиключні ліцензії на використання сервісу контролю за об’єктами будівництва, який розміщений на веб-сайті Ліцензіара, на якому розміщена ця публічна оферта (далі – Сервіс).`
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  1.2{" "}
                  {t(
                    `Сервіс дає право Ліцензіату контролювати процес будівництва вибраних об’єктів, зокрема, в особистому кабінеті отримувати детальну інформацію щодо кожного етапу будівництва об’єкта, ознайомлюватися з усією проєктною документацією та вести комунікацію безпосередньо із забудовником об’єкта будівництва.`
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  1.3 {t(`Ліцензіат може отримати необмежену кількість ліцензій.`)}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2 {t(`УМОВИ ВИКОРИСТАННЯ СЕРВІСУ`)}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.1{" "}
                  {t(
                    `Ліцензіат самостійно реєструється у Сервісі за допомогою унікального логіна і пароля, який Ліцензіат створює самостійно.`
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.2{" "}
                  {t(
                    `Після реєстрації в Сервісі, Ліцензіат отримує доступ до особистого кабінету, де має можливість придбати невиключну ліцензію на обраний об’єкт будівництва.`
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.3{" "}
                  {t(
                    `Ліцензіат обирає одну або декілька ліцензій та вносить плату, передбачену за використання Сервісу.`
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.4{" "}
                  {t(
                    "Ліцензіат не має права видавати субліцензії на використання Сервісу третім особам, а також не має права передавати свій логін і пароль доступу в особистий кабінет у Сервісі. У зв’язку з цим Ліцензіат погоджується, що всі дії, які будуть вчинені у Сервісі з використанням логіну і пароля Ліцензіата, вважаються діями, які Ліцензіат вчинив особисто."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.5{" "}
                  {t(
                    "Територія дії невиключних прав, які надаються Ліцензіату, не обмежена."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.6{" "}
                  {t(
                    "Строк дії ліцензії встановлюється щодо кожного обєкта будівництва окремо та зазначається на веб-сайті Ліцензіара."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.7{" "}
                  {t(
                    "Ліцензіату надається тестовий період на користування Сервісом, який становить 3 місяці з дня внесення Ліцензіатом відповідної оплати."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.8{" "}
                  {t(
                    "Якщо після закінчення тестового періоду Ліцензіат з будь-яких причин заявить Ліцензіару про свою відмову від подальшого користування Сервісом, то Ліцензіар зобов’язується повернути Ліцензіату сплачені ним грошові кошти за користування Сервісом. При цьому Ліцензіар у повному обсязі повертає Ліцензіату сплачену Ліцензіатом суму, а також додаткову компенсацію у розмірі 10% від вказаної суми. Ліцензіар усвідомлює, що під час виплати додаткової компенсації Ліцензіар виконує обов’язки податкового агента і утримує та сплачує до бюджету необхідні податки з суми нарахованої додаткової компенсації."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  2.9{" "}
                  {t(
                    "Після повернення коштів Ліцензіату Ліцензіар припиняє доступ Ліцензіата до Сервісу."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  3 {t("ВАРТІСТЬ ТА ПОРЯДОК РОЗРАХУНКІВ")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  3.1{" "}
                  {t(
                    "Вартість плати за користування Сервісом зазначається на веб-сайті Ліцензіара."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  3.2{" "}
                  {t(
                    "Ліцензіат сплачує за користування Сервісом шляхом внесення 100% передоплати на банківський рахунок Ліцензіара, вказаний у реквізитах до цього Договору, або використовуючи платіжні системи, доступні на веб-сайті Ліцензіара."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  3.3{" "}
                  {t(
                    "Ліцензіар вправі змінювати вартість плати за користування Сервісом до моменту внесення Ліцензіатом відповідної оплати. Ліцензіар також може встановлювати різну вартість за отримання невиключної ліцензії на різні об’єкти будівництва."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  3.4{" "}
                  {t(
                    "Вартість плати може бути змінена Ліцензіаром в односторонньому порядку без попереднього повідомлення Ліцензіата. В такому випадку змінена вартість починає діяти з моменту її зазначення на веб-сайті Ліцензіара."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4 {t("СТРОК ДІЇ ДОГОВОРУ ТА ПОРЯДОК РОЗІРВАННЯ")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4.1{" "}
                  {t(
                    "Дата реєстрації Ліцензіата у Сервісі вважається датою укладення цього Договору."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4.2{" "}
                  {t(
                    "Цей Договір опублікований на веб-сайті Ліцензіара та дійсний протягом строку дії ліцензій, придбаних Ліцензіатом."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4.3 {t("Цей Договір може бути розірваний у випадку:")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t(
                    "відмови Ліцензіата від користування Сервісом після закінчення тестового періоду;"
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t(
                    "з ініціативи Ліцензіара за умови попередження Ліцензіата за 30 календарних днів до запланованої дати розірвання Договору. У випадку розірвання договору з ініціативи Ліцензіата раніше строку дії ліцензії Ліцензіар повертає Ліцензіату сплачені Ліцензіатом грошові кошти у повному обсязі."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4.4{" "}
                  {t(
                    "Ліцензіар має право вносити зміни до Договору в односторонньому порядку без попереднього повідомлення Ліцензіата. В такому випадку оновлена редакція Договору починає діяти з моменту опублікування її на веб-сайті Ліцензіара."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  4.5{" "}
                  {t(
                    "У разі незгоди Ліцензіата зі змінами, внесеними до Договору, такий Ліцензіат зобов’язаний припинити користуватись Сервісом. Продовження користування Сервісом свідчить про згоду Ліцензіата з внесеними до Договору змінами."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>5 {t("ІНШІ УМОВИ")}</Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.1{" "}
                  {t(
                    "Ліцензіат вважається ознайомленим з умовами Договору та таким, що погодився з ними, в момент внесення плати за користування Сервісом."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.2{" "}
                  {t(
                    "Умови цього Договору є однаковими та обов’язковими для всіх фізичних осіб."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.3{" "}
                  {t(
                    "Ліцензіат не має права розголошувати третім особам інформацію про Ліцензіара, яка стала відома у зв’язку із виконанням цього Договору, крім випадків, передбачених законодавством України."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.4{" "}
                  {t(
                    "Акцептуючи цей Договір, Ліцензіат дає згоду на обробку своїх персональних даних та внесення їх до бази даних Ліцензіара відповідно до вимог Закону України «Про захист персональних даних». Ліцензіат підтверджує, що він повідомлений про свої права відповідно до Закону України «Про захист персональних даних»."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.5{" "}
                  {t(
                    "Ліцензіар може використовувати персональні дані Ліцензіата з метою:"
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t("опрацювання запитів на користування Сервісом;")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t(
                    "повернення Ліцензіату грошових коштів у випадку розірвання цього Договору;"
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t(
                    "надання Ліцензіату інформаційної підтримки у разі виникнення запитань;"
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  <VectorExpoIcons type={"Entypo"} name="dot-single" />{" "}
                  {t("врегулювання юридичних питань.")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.6{" "}
                  {t(
                    "Ліцензіар може залучати своїх підрядників/працівників для опрацювання персональних даних Ліцензіата."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.7{" "}
                  {t(
                    "Ліцензіар може використовувати контактні дані Ліцензіата з метою надсилання за межами особистого кабінету інформаційних повідомлень, які стосуються об’єктів будівництва або змін у роботі Сервісу. За письмовою заявою Ліцензіата контактні дані останнього виключаються зі списку адресатів для інформаційних повідомлень."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.8{" "}
                  {t(
                    "Ліцензіар може використовувати файли cookie для вивчення користувацького досвіду та покращення якості своїх сервісів. Видалення або блокування cookie-файлів може вплинути на якість користування веб-сайтом."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.9{" "}
                  {t(
                    "Ліцензіар застосовує технічні та організаційні заходи з метою захисту інформації, яка надходить йому від Ліцензіата."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.10{" "}
                  {t(
                    "Ліцензіар має право на доступ до інформації про те, яким чином обробляються та зберігаються його персональні дані."
                  )}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  5.11{" "}
                  {t(
                    "Ліцензіар несе відповідальність за шкоду, заподіяну Ліцензіату порушенням цього розділу про захист персональних даних."
                  )}
                </Paragraph>
                <Paragraph
                  style={[
                    style.descriptionText,
                    { color: colors.mine_shaft, fontWeight: "600" }
                  ]}
                >
                  {t("РЕКВІЗИТИ ЛІЦЕНЗІАРА")}
                </Paragraph>
                <Paragraph
                  style={[
                    style.descriptionText,
                    { color: colors.mine_shaft, fontWeight: "600" }
                  ]}
                >
                  {t("ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «СЕЙЛРОУ»")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  {t("ідентифікаційний код юридичної особи 44838677")}
                </Paragraph>
                <Paragraph style={style.descriptionText}>
                  {t(
                    "юридична адреса: вул. Гетьмана Вадима, будинок 27, офіс 1020, місто Київ, 03056"
                  )}
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
              {t("offerConfirm", {
                name: name,
                taxNumber: taxNumber
              })}
            </ItemText>
          </View>

          {isConfirmPaymentError && <ErrorMessage message={t("Щось пішло не так")} />}

          <Button
            title={t("Далі")}
            onPress={handleConfirmPayment}
            disabled={!checkCondition || isConfirmPaymentLoading}
            loading={{ isNeed: true, isLoading: isConfirmPaymentLoading }}
          />
        </View>
        <OrganizationInfo />
      </View>
    </ScrollView>
  )
}

export default gestureHandlerRootHOC(ConfrimPayment)
