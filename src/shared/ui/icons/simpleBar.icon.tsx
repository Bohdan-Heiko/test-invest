import { SimpleLineIcons } from "@expo/vector-icons";

export function SimpleLineIcon(props: {
  name: React.ComponentProps<typeof SimpleLineIcons>["name"];
  color: string;
  sizes: number;
}) {
  return <SimpleLineIcons size={props.sizes} style={{ marginBottom: -3 }} {...props} />;
}
