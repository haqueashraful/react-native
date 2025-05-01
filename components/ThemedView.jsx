import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, ...props }) => {
  const ColorScheme = useColorScheme();
  const theme = Colors[ColorScheme] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.background, },style,]}
      {...props}
    />
  );
};

export default ThemedView;
