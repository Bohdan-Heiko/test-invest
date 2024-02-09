import { Octicons } from "@expo/vector-icons";

export function OcticonsBarIcon(props: {
  name: React.ComponentProps<typeof Octicons>["name"];
  color: string;
  sizes?: number;
}) {
  return <Octicons size={props.sizes ?? 28} style={{ marginBottom: -3 }} {...props} />;
}
