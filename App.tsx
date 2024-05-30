import { StyleSheet } from "react-native";
import StackRouter from "./src/router/StackRouter";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import MovieContextProvider from "./src/contexts/MovieContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
export default function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <MovieContextProvider>
          <Provider store={store}>
            <NavigationContainer>
              <StackRouter></StackRouter>
            </NavigationContainer>
          </Provider>
        </MovieContextProvider>
      </QueryClientProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
