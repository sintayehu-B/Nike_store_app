import { StyleSheet, View } from "react-native";

import ProductsScreen from "./src/screens/ProductsScreen";
import ProductsDetailsScreen from "./src/screens/ProductsDetailsScreen";
import ShoppingCartScreen from "./src/screens/ShoppingCartScreen";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
