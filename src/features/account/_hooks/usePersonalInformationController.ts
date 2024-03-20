import { useAppSelector } from "@/store"
import { useLazyFindUserRealtorQuery } from "@/store/services/userOperationsApi"
import { useChangeUserDataMutation } from "@/store/services/usersApi"
import {
  useCreateWithdrawalMutation,
  useLazyGetMinWithdrawalMeaningQuery
} from "@/store/services/withdrawalsApi"
import { ModalData } from "@/types"

export const usePersonalInformationController = ({
  openModal,
  closeModal
}: {
  openModal: (data: ModalData) => void
  closeModal: () => void
}): {
  handleGetMinWithdrawalMeaning: () => void
  openRealtorModal: () => void
} => {
  const { id: userID, balance } = useAppSelector((state) => state.user_data)

  const [findUserRealtor] = useLazyFindUserRealtorQuery()
  const [changeUserData] = useChangeUserDataMutation()
  const [createWithdrawal] = useCreateWithdrawalMutation()
  const [getMinWithdrawalMeaning] = useLazyGetMinWithdrawalMeaningQuery()

  const handleCreateWithdrawal = async (amount: string) => {
    await createWithdrawal({ amount })
      .unwrap()
      .then(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Виведення грошей пройшло успішно!",
            subTitle: "Кошти будуть зараховані вам найближчим часом",
            btnTitle: "Ok",
            btnVariant: "primary",
            palcingText: "center"
          }
        })
      )
      .catch(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Щось пішло не так"
          }
        })
      )
  }

  const handleGetMinWithdrawalMeaning = async () => {
    await getMinWithdrawalMeaning()
      .unwrap()
      .then((res) => {
        openModal({
          type: "withdrawal-modal",
          data: {
            value: res.value,
            balance,
            handlePress: ({ value }) => handleCreateWithdrawal(value)
          }
        })
      })
      .catch(() =>
        openModal({
          type: "success-modal",
          data: {
            title: "Щось пішло не так"
          }
        })
      )
  }

  const handleChangeUserData = async (realtorID: number) => {
    const data = {
      id: userID,
      realtor: { id: realtorID }
    }

    await changeUserData(data).unwrap().then(closeModal).catch(console.log)
  }

  const openRealtorModal = () => {
    openModal({
      type: "realtor-modal",
      data: { findRealtor: onFindRealtor }
    })
  }

  const onFindRealtor = async (link: string) => {
    await findUserRealtor(link)
      .unwrap()
      .then((res) => {
        openModal({
          type: "confirm-modal",
          data: {
            title: "Ваш рієлтор",
            subTitle: `${res.name}?`,
            handlePress: () => handleChangeUserData(res.id)
          }
        })
      })
      .catch(() => {
        openModal({
          type: "reltor-notFound",
          data: {
            handlePress: openRealtorModal
          }
        })
      })
  }

  return { handleGetMinWithdrawalMeaning, openRealtorModal }
}
