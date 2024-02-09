import React from "react";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { View } from "react-native";

type IconType =
  | typeof AntDesign
  | typeof Entypo
  | typeof EvilIcons
  | typeof Feather
  | typeof FontAwesome
  | typeof FontAwesome5
  | typeof Fontisto
  | typeof Ionicons
  | typeof MaterialCommunityIcons
  | typeof MaterialIcons
  | typeof Octicons
  | typeof SimpleLineIcons
  | typeof Zocial;

const VECTOR_ICONS_TYPE: IconType = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  FontAwesome5: FontAwesome5,
  Fontisto: Fontisto,
  Ionicons: Ionicons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  Octicons: Octicons,
  SimpleLineIcons: SimpleLineIcons,
  Zocial: Zocial,
};

interface BarIconProps<T extends keyof IconType> {
  type: T;
  name: IconType[T] extends React.ComponentType<infer P> ? keyof P : string;
  color?: string;
  size?: number;
  style?: View["props"]["style"];
}

export function VectorExpoIcons<T extends keyof IconType>(props: BarIconProps<T>) {
  const { type, name, color, size = 28, style: styleProps } = props;
  const ChosenIcon = VECTOR_ICONS_TYPE[type];

  if (!ChosenIcon) {
    console.error(`Invalid icon type: ${type as IconType}`);
    return null;
  }

  return (
    <ChosenIcon name={name} size={size} color={color} style={[styleProps,{ marginBottom: -3, }]} />
  );
}
