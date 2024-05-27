import { Text, View } from "react-native";

type CustomCardProps = {
  footer: string;
  title: string;
  children: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ footer, title, children }) => {
  return (
    <View>
      <Text>{title}</Text>
      <View>{children}</View>
      <Text>{footer}</Text>
    </View>
  );
};

export default CustomCard;
