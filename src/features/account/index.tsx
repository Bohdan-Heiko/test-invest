import { ScrollView, View } from "react-native";
import { style } from "./_style";

import { YourAccount } from "./_components/yourAccount";
import { AccrualAccount } from "./_components/accrualAccount";
import { OrganizationInfo } from "@/shared/components";
import { PersonalInformation } from "./_components/personalInformation";
import { MyProjects } from "./_components/myProjects";

export const Account = () => {
  return (
    <ScrollView
      overScrollMode="never"
      nestedScrollEnabled={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={style.mainContainer}>
        <YourAccount />
        <PersonalInformation />
        <AccrualAccount title="Нарахування" />
        <AccrualAccount title="Інвестиції" />
        <MyProjects />
        <OrganizationInfo />
      </View>
    </ScrollView>
  );
};
