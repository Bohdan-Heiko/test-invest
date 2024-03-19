import * as yup from "yup"

export const BuildingSchema = yup
  .object({
    id: yup.number().required(),
    title: yup.string().required(),
    report: yup.string().required(),
    createdAt: yup.string().required(),
    percent: yup.number().required()
  })
  .required()

const memberSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().required(),
  description: yup.string().required(),
  telegram: yup.string(),
  linkedin: yup.string(),
  facebook: yup.string(),
  contentUrl: yup.lazy((value) =>
    typeof value !== "object"
      ? yup.string()
      : yup.object().shape({
          contentUrl: yup.string()
        })
  )
})

const photosSchema = yup.array().of(
  yup.object().shape({
    contentUrl: yup.string().required()
  })
)

export const buildingsResponseSchema = yup.object().shape({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  duration: yup.string().required(),
  price: yup.number().required(),
  status: yup.string().oneOf(["inWork", "Completed", "Cancelled"]).required(),
  location: yup.string().required(),
  infrastructure: yup.string().required(),
  safety: yup.string().required(),
  photos: photosSchema,
  team: yup.array().of(memberSchema),
  createdAt: yup.string().required(),
  updatedAt: yup.string().required()
})
