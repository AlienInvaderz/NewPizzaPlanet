import React, { useState } from "react";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "../../../../assets/data/products";
import Button from "../../../components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [pickedSize, setPickedSize] = useState(sizes[0]);

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn(`Adding to cart ${pickedSize} ${product?.name}`);
    //   if (!product) {
    //     return;
    //   }
    //   addItem(product, selectedSize);
    //   router.push('/cart');
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setPickedSize(size);
            }}
            style={[
              styles.size,
              { backgroundColor: pickedSize === size ? "gainsboro" : "white" },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                { color: pickedSize === size ? "black" : "gray" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={{ fontSize: 20 }}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default ProductDetailsScreen;

// import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   ActivityIndicator,
// } from 'react-native';
// import { defaultPizzaImage } from '@/components/ProductListItem';
// import { useState } from 'react';
// import Button from '@components/Button';
// import { useCart } from '@/providers/CartProvider';
// import { PizzaSize } from '@/types';
// import { FontAwesome } from '@expo/vector-icons';
// import Colors from '@/constants/Colors';
// import { useProduct } from '@/api/products';
// import RemoteImage from '@/components/RemoteImage';

// const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

// const ProductDetailsScreen = () => {
//   const { id: idString } = useLocalSearchParams();
//   const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);
//   const { data: product, error, isLoading } = useProduct(id);

//   const { addItem } = useCart();

//   const router = useRouter();

//   const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

//   const addToCart = () => {
//     if (!product) {
//       return;
//     }
//     addItem(product, selectedSize);
//     router.push('/cart');
//   };

//   if (isLoading) {
//     return <ActivityIndicator />;
//   }

//   if (error) {
//     return <Text>Failed to fetch products</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Stack.Screen
//         options={{
//           title: 'Menu',
//           headerRight: () => (
//             <Link href={`/(admin)/menu/create?id=${id}`} asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="pencil"
//                     size={25}
//                     color={Colors.light.tint}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />

//       <Stack.Screen options={{ title: product.name }} />

//       <RemoteImage
//         path={product?.image}
//         fallback={defaultPizzaImage}
//         style={styles.image}
//       />

//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.price}>${product.price}</Text>
//     </View>
//   );
// };
