import { TouchableOpacity, View } from "react-native";

type CustomButtonProps = {
  customOnPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ customOnPress }) => {
  return (
    <TouchableOpacity onPress={customOnPress}>
      <View></View>
    </TouchableOpacity>
  );
};

export default CustomButton;
