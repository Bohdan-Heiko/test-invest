import { View } from "react-native"

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
  Zocial
} from "@expo/vector-icons"

export type SVGIconNames =
  | "Eye"
  | "HideEye"
  | "CheckBox_Check"
  | "CheckBox_Uncheck"
  | "Arrow_Up_Right"
  | "Visa_Logo"
  | "Visa_Name"
  | "Tether_Usdt"

export type IconType =
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
  | typeof Zocial

export const VECTOR_ICONS_TYPE: IconType = {
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
  Zocial: Zocial
}

export interface BarIconProps<T extends keyof IconType> {
  type?: T
  name?: IconType[T] extends React.ComponentType<infer P> ? keyof P : string
  color?: string
  size?: number
  style?: View["props"]["style"]
}
