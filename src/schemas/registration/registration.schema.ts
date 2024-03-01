import * as yup from "yup"

import {
  LATIN_CHARACTER_REGEX,
  LOWER_CHARACTER_REGEX,
  NUMBER_CHARACTER_REGEX,
  UPPERCASE_CHARACTER_REGEX
} from "@/utils/constants/regex"

export const registrationSchema = yup.object({
  name: yup
    .string()
    .min(1, "Nickname must be at least 1 character long")
    .max(255, "Nickname can be at most 255 characters lon")
    .required("Nickname is required"),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  birthdate: yup.string().required(),
  taxNumber: yup
    .string()
    .min(10, "Tax must be have min 10 characters")
    .max(10, "Tax must be have min 10 characters")
    .required(),
  password: yup
    .string()
    .matches(UPPERCASE_CHARACTER_REGEX, "One uppercase character")
    .matches(LOWER_CHARACTER_REGEX, "One lowercase character")
    .matches(NUMBER_CHARACTER_REGEX, "One Number")
    .matches(LATIN_CHARACTER_REGEX, "One Number")
    .min(8, "8 characters minimum")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required()
})

export const loginSchema = registrationSchema.pick(["email", "password"])
