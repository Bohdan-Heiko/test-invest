import { Button, Devider, ItemText, Title } from "@/shared/ui";
import { ScrollView, View } from "react-native";
import { style } from "./_style";

import { YourAccount } from "./_components/yourAccount";
import { AccrualAccount } from "./_components/accrualAccount";
import { OrganizationInfo } from "@/shared/components";

export const Account = () => {
  return (
    <ScrollView overScrollMode='never' nestedScrollEnabled={false} showsVerticalScrollIndicator={false}>
      <View style={style.mainContainer}>
        <YourAccount />
        <AccrualAccount title="Нарахування" />
        <AccrualAccount title="Інвестиції" />
        <OrganizationInfo />
      </View>
    </ScrollView>
  );
};
