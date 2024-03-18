import { HydraData } from "@/types"
import * as yup from "yup"
import { transformDataHelpers } from "../transformData"

const helpers = {
  validateHydraResponse<T extends yup.AnyObject>(
    baseQueryReturnValue: HydraData<T>,
    schema: yup.ObjectSchema<T>
  ) {
    try {
      const transformetData =
        transformDataHelpers.transformJsonLdToJson<T>(baseQueryReturnValue)

      transformetData.data.forEach((item) => {
        schema.validateSync(item, {
          strict: true,
          abortEarly: false
        })
      })

      return transformetData
    } catch (error) {
      throw new Error(JSON.stringify(error))
    }
  }
}

export { helpers as validatedResponseHelpers }
