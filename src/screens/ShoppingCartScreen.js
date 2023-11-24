import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
const ShoppingCartScreen = () => {
  const ShoppingCartTotals = () => (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}> subTotal</Text>
        <Text style={styles.text}> 410,00 us $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}> Delivery fee</Text>
        <Text style={styles.text}> 10 us $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}> Total</Text>
        <Text style={styles.textBold}> 410,10 us $</Text>
      </View>
    </View>
  );
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={<ShoppingCartTotals />}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Check out</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  totalContainer: {
    paddingTop: 10,
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,

    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 18,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
