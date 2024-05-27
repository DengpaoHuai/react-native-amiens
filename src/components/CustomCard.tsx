import { Text, View } from "react-native";

type CustomCardProps = {
  footer: string;
  title: string;
  children: React.ReactNode;
};

const CustomCard = ({ footer, title, children }: CustomCardProps) => {
  return (
    <View>
      <Text>{title}</Text>
      <View>{children}</View>
      <Text>{footer}</Text>
    </View>
  );
};

export default CustomCard;
