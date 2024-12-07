import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {

  return (
    <View style={styles.screen}>

      <View style={styles.box}>
        <View style={styles.head}>
          <View style={styles.userImage}></View>
          <View style={styles.userImage2}></View>
          <Text style={styles.text}> hi</Text>
        </View>
        <View style={styles.image}></View>
      </View>

    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#00000050',
    padding: 20,
  },
  box: {
    flex: 0.5,
    backgroundColor: 'blue',
    padding:5,
    // justifyContent
    // alignItems
  },
  head:{
    flexDirection:'row',
    flex:1,
    borderWidth:2,
    alignItems:'center'
  },
  userImage:{
    backgroundColor: 'red',
    height:100,
    width:100,
    borderWidth:1,
    borderRadius:100
  },
  userImage2:{
    backgroundColor: '#1999',
    height:100,
    width:100,
    borderWidth:1,
    borderRadius:100,
    marginHorizontal:10
  },
  image:{
    flex:2,
  },
  text:{
    backgroundColor: 'black',
    flex:900,
    borderWidth:3,
    color:'#fff',
    fontSize:25,
    fontWeight:'bold'
    // alignSelf:'stretch'
  }
})