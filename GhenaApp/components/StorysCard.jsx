import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StorysCard = () => {
  return (
    <View >
        <View style={styles.userImage}></View>
      <Text style={styles.text}>StorysCard</Text>

    </View>
  )

}

export default StorysCard

const styles = StyleSheet.create({
    
    text: {
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: '#145145',
       alignSelf: 'flex-start',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10
        // alignSelf:'stretch'
      },
      userImage: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 100
      },
})