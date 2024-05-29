import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "../components/ui/form/CustomTextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormSchema } from "../schemas/movie.schema";

const CreateMoviesForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: Form) => {
    console.log(data);

    fetch("https://crudcrud.com/api/45603a75f563475b9cb76fc631f7aacb/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <CustomTextInput<Form>
        control={control}
        name="title"
        placeholder="Title"
      ></CustomTextInput>
      {errors.title && <Text>{errors.title.message}</Text>}
      <CustomTextInput
        control={control}
        name="description"
        placeholder="Description"
      ></CustomTextInput>
      {errors.description && <Text>{errors.description.message}</Text>}
      <CustomTextInput
        control={control}
        name="rating"
        placeholder="Rating"
        keyboardType="numeric"
      ></CustomTextInput>
      {errors.rating && <Text>{errors.rating.message}</Text>}

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={styles.customText}>Presse moi </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
  button: {
    backgroundColor: "#00d5d9",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  customText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default CreateMoviesForm;
