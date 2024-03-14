import { ImageBackground, View } from "react-native"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import * as yup from "yup"

import { Button, Input, Paragraph, Title } from "@/shared/ui"
import { useCreateFeedBackMutation } from "@/store/services/userOperationsApi"
import { FeedbackBody } from "@/types"
import { colors } from "@/utils/constants/colors"
import { yupResolver } from "@hookform/resolvers/yup"

import FormBackgroundImage from "#/images/other/form-question-background.jpeg"

import { style } from "../_style"

const registrationSchema = yup.object({
  name: yup
    .string()
    .min(1, "Nickname must be at least 1 character long")
    .required("Nameƒ is required"),
  phone: yup.string().required()
})

export const CallBackForm = () => {
  const { t } = useTranslation("callBack")
  const [createFeedBack, { isSuccess: isCreateFeedbackSuccess }] =
    useCreateFeedBackMutation()

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    mode: "all",
    resolver: yupResolver(registrationSchema)
  })

  const handleCreateeFeedback: SubmitHandler<FeedbackBody> = async (data) => {
    await createFeedBack(data).unwrap().catch(console.log)
  }

  return (
    <View style={style.questionFormContainer}>
      <ImageBackground
        source={FormBackgroundImage}
        resizeMode="stretch"
        style={style.backgroundImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={style.backGroundDarkening} />
        <View
          style={[
            style.contentContainer,
            {
              alignItems: isCreateFeedbackSuccess ? "center" : "flex-start",
              justifyContent: "center"
            }
          ]}
        >
          <Title style={style.contentTitle}>
            {isCreateFeedbackSuccess
              ? t("Дякуємо")
              : t(`Хочете стати інвестором, але є питання?`)}
          </Title>
          <Paragraph
            style={[
              style.contentText,
              {
                fontSize: isCreateFeedbackSuccess ? 20 : 14,
                color: isCreateFeedbackSuccess ? colors.white : colors.silver,
                textAlign: isCreateFeedbackSuccess ? "center" : "left"
              }
            ]}
          >
            {isCreateFeedbackSuccess
              ? t("Ваша заявка опрацьовується.")
              : t(
                  "Залиште заявку на безкоштовний дзвінок, ми зв’яжемося з вами протягом 20 хвилин"
                )}
          </Paragraph>

          {!isCreateFeedbackSuccess && (
            <View style={style.contentFormContainer}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    fields={{ ...field }}
                    error={errors.name}
                    isTouchField={!!dirtyFields.name}
                    inputProps={{
                      placeholder: t("Ім’я"),
                      maxLength: 10,
                      style: { color: colors.white },
                      onChangeText: field.onChange
                    }}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Input
                    fields={{ ...field }}
                    error={errors.phone}
                    isTouchField={!!dirtyFields.phone}
                    inputProps={{
                      placeholder: t("Номер телефону"),
                      maxLength: 10,
                      keyboardType: "number-pad",
                      style: { color: colors.white },
                      onChangeText: field.onChange
                    }}
                  />
                )}
              />
              <Button
                title={t("Замовити дзвінок")}
                onPress={handleSubmit(handleCreateeFeedback)}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  )
}
