import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.cardstyle}>THIS IS CARD</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: 'red',
  },
  cardstyle: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 50,
    margin: 2,
  },
})
