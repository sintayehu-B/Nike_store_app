import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectVatPrice,
  selectSubtotal,
  selectTotalPrice,
} from "../store/cartSlice";

const ShoppingCartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const ShoppingCartTotals = () => {
    const subTotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const vat = useSelector(selectVatPrice);
    const total = useSelector(selectTotalPrice);
    return (
      <View style={styles.totalContainer}>
        <View style={styles.row}>
          <Text style={styles.text}> subTotal</Text>
          <Text style={styles.text}> {subTotal} us $</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}> Delivery fee</Text>
          <Text style={styles.text}> {deliveryFee} us $</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}> Vat</Text>
          <Text style={styles.text}> {vat} us $</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}> Total</Text>
          <Text style={styles.textBold}> {total} us $</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
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
    marginBottom: 90,
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
