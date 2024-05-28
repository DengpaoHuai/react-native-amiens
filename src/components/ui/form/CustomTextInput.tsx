import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyleSheet, Text, TextInput } from "react-native";

type CustomTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
};

function CustomTextInput<T extends FieldValues>({
  control,
  name,
  placeholder,
  keyboardType = "default",
}: CustomTextInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        formState: { errors },
      }) => (
        <>
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.textinput}
            keyboardType={keyboardType}
          />
          {error && <Text>{error.message}</Text>}
        </>
      )}
    ></Controller>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderRadius: 4,
    borderColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "e2e2e2",
    elevation: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    width: "80%",
  },
});

export default CustomTextInput;
