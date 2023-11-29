import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { ProductSlice } from "../store/ProductsSlice";
const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const productOnPressHandler = (item) => {
    // update selected products
  };
  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(ProductSlice.actions.setSelectProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
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
