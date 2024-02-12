import { ScrollView, TextInput, View } from "react-native"

import { OrganizationInfo, PasswordRules } from "@/shared/components"
import { Button, Input, LinkRedirect, Paragraph, Title } from "@/shared/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DatePicker from "react-native-date-picker"

import { style } from "./_style"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react"

// const EMAIL_REG = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const UPPERCASE_CHARACTER_REGEX = /[A-Z]/
const LOWER_CHARACTER_REGEX = /[a-z]/
const NUMBER_CHARACTER_REGEX = /[0-9]/
const LATIN_CHARACTER_REGEX = /^[A-Za-z0-9!@#\$%\^\&*\-_]+$/

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Nickname must be at least 1 character long")
    .max(255, "Nickname can be at most 255 characters lon")
    .required("Nickname is required"),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  birthdate: yup.string().required(),
  taxNumber: yup
    .string()
    .min(10, "Tax must be have min 10 characters")
    .max(10, "Tax must be have min 10 characters"),
  password: yup
    .string()
    .required("Password is required")
    .matches(UPPERCASE_CHARACTER_REGEX, "One uppercase character")
    .matches(LOWER_CHARACTER_REGEX, "One lowercase character")
    .matches(NUMBER_CHARACTER_REGEX, "One Number")
    .matches(LATIN_CHARACTER_REGEX, "One Number")
    .min(8, "8 characters minimum")
})

export const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Account section */}
      <View style={style.loginContainer}>
        <Title style={style.title}>Реєстрація</Title>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input placeHolder="ПІБ" fields={{ ...field }} error={errors.name} />
          )}
        />
        <Controller
          name="taxNumber"
          control={control}
          render={({ field }) => (
            <Input placeHolder="ІПН" fields={{ ...field }} error={errors.taxNumber} />
          )}
        />
        {/* <Controller
          name="birthdate"
          control={control}
          render={({ field }) => <Input placeHolder="ІПН" fields={{ ...field }} error={errors.taxNumber} />}
        /> */}

        <DatePicker
          modal
          open={open}
          date={date}
          // onConfirm={(date) => {
          //   setOpen(false)
          //   setDate(date)
          // }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input placeHolder="Пошта" fields={{ ...field }} error={errors.taxNumber} />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input placeHolder="Пароль" fields={{ ...field }} error={errors.taxNumber} />
          )}
        />
        {/* <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input placeHolder="Повторіть пароль" fields={{ ...field }} error={errors.taxNumber} />
          )}
        /> */}
        {/*
        <Input placeHolder="Дата народження" />
        <Input placeHolder="Пошта" />
        <Input placeHolder="Пароль" iconName="HideEye" styles={{ marginBottom: 10, position: "relative", zIndex: 100 }}>
          <PasswordRules />
        </Input>
        <Input placeHolder="Повторіть пароль" /> */}

        <Button
          variant="primary"
          title="Далі"
          onPress={handleSubmit(
            (data) => console.log(data),
            (error) => console.log(error)
          )}
        />
        <Button
          variant="secondary"
          title="Увійти через Дію"
          onPress={() => setOpen(true)}
          style={{ marginBottom: 16 }}
        />
        <View style={style.accountInfo}>
          <Paragraph style={style.accountInfoText}>Вже маєш аккаунт?</Paragraph>
          <LinkRedirect href="/(tabs)">Увійти</LinkRedirect>
        </View>
      </View>
      {/* Account section */}

      <OrganizationInfo />
    </ScrollView>
  )
}
