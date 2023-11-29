import { StyleSheet, View } from "react-native";

import ProductsScreen from "./src/screens/ProductsScreen";
import ProductsDetailsScreen from "./src/screens/ProductsDetailsScreen";
import ShoppingCartScreen from "./src/screens/ShoppingCartScreen";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
