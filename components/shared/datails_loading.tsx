import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Datails_loading = () => {
  return (
    <View style={cls.wrapper}>
      <View style={cls.item1}></View>
      <View style={cls.item2}>
        <View style={cls.itemss1}></View>
        <View style={cls.itemss2}></View>
        <View style={cls.itemss3}></View>
        <View style={cls.itemss4}></View>
      </View>
      <View style={cls.item3}></View>
    </View>
  );
};

const cls = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item1: {
    flex: 3,
    width: "100%",
    height: 10,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  item2: {
    flex: 2,
    width: "100%",
    height: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  item3: {
    flex: 0.52,
    width: "100%",
    height: 20,
    marginHorizontal: 10,
    backgroundColor: "rgb(245, 247, 250)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  itemss1: {
    width: "95%",
    height: 100,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  itemss2: {
    width: "80%",
    height: 40,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  itemss3: {
    width: "55%",
    height: 40,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  itemss4: {
    width: "45%",
    height: 40,
    backgroundColor: "rgb(245, 247, 250)",
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default Datails_loading;
