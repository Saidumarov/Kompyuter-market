import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function NotfoundCard() {
  return (
    <View style={cls.cart_w_not}>
      <View style={cls.cart_img}>
        <Feather name="shopping-cart" style={cls.cart_icon} />
      </View>
      <Text style={cls.cart_h2}>Savatda hozircha mahsulot yo'q.</Text>
      <Text style={cls.cart_p}>
        Mahsulotdagi <Feather name="shopping-cart" style={cls.cartIcon} />{" "}
        belgisi bilan qo'shing️
      </Text>
    </View>
  );
}

export function NotfoundLike() {
  return (
    <View style={cls.like_w}>
      <View style={cls.like_img}>
        <AntDesign name="hearto" style={cls.like_icon} />
      </View>

      <Text style={cls.like_h2}>Sevimli mahsulotlar yo'q</Text>
      <Text style={cls.like_p}>
        Mahsulotdagi <AntDesign name="heart" style={cls.heart} /> belgisi bilan
        qo'shing️
      </Text>
    </View>
  );
}

const cls = StyleSheet.create({
  cart_w_not: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cart_img: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(244, 225, 255, 0.811)",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
  },
  cart_icon: {
    fontSize: 70,
    color: "rgb(130, 0, 211)",
  },
  cartIcon: {
    fontSize: 20,
    color: "rgb(130, 0, 211)",
  },
  cart_h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  cart_p: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  heart: {
    fontSize: 17,
    color: "red",
    marginTop: 10,
  },
  like_h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  like_p: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  like_img: {
    width: 120,
    height: 120,
    backgroundColor: "rgb(253 245 243)",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  like_icon: {
    fontSize: 70,
    color: "red",
  },
  like_w: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
