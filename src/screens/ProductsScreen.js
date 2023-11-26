import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import products from "../data/products";
const ProductsScreen = ({ navigation }) => {
  const productOnPressHandler = () => {
    navigation.navigate("Product Details");
  };
  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => (
        <Pressable onPress={productOnPressHandler} style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemNameTxt}>{item.name}</Text>
            <Text style={styles.itemPriceTxt}>$ {item.price}</Text>
          </View>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",

    margin: 10,
  },
  itemPriceTxt: { fontSize: 16, fontWeight: "bold" },
  itemNameTxt: {
    fontSize: 14,
  },
});
