import { View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Link } from 'expo-router'

export const ProductListItem = ({product}) => {
    return (
      <View style={styles.container}> 
        <Image source={{ uri: product.image}}
        style={styles.image}
        resizeMode='contain'
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Link href={"/product"}>Details about your pizza</Link>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      flex: 1,
      margin: 2,
      maxWidth: '50%'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 10,
      color: 'blue',
    },
    image: {
      width: '100%',
      aspectRatio: 1
    }})
  