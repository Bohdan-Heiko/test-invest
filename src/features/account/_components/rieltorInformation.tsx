import { ItemText, Paragraph, Title, VectorExpoIcons } from "@/shared/ui";
import { View } from "react-native";
import { style } from "../_style";
import { colors } from "@/constants/colors";

export const RieltorInformation = () => {
  return (
    <View style={style.rieltorInfoMainContainer}>
      <View style={style.descriptionContainer}>
        <Title style={style.descriptionTitle}>Посилання</Title>
        <Paragraph style={style.description}>
          Діліться посиланням, щоб ваші клієнти легко знайшли вас
        </Paragraph>
      </View>
      <View style={style.infoContainer}>
        <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>Реферальне посилання</Title>
            <VectorExpoIcons type='Octicons' name="copy" color={colors.blue} size={18} />
          </View>
          <ItemText>https://buchaproinvest/uk</ItemText>
        </View>
        <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>Код для пошуку</Title>
            <VectorExpoIcons type='Octicons' name="copy" color={colors.blue} size={18} />
          </View>
          <ItemText>qwe345</ItemText>
        </View>
        <View style={style.infoLinksContainer}>
          <View style={style.infoLinksTitleContainer}>
            <Title style={style.infoLinksTitle}>Відсоток прибутку</Title>
            {/* <VectorExpoIcons type='Octicons' name="copy" color={colors.blue} sizes={18} /> */}
          </View>
          <ItemText>13%</ItemText>
        </View>
      </View>
    </View>
  );
};
