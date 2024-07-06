import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import products from "~/assets/data/products";
import ProductListItem from "~/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 5 }}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//     borderColor: 'black'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 10,
//     color: 'blue',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   }})
