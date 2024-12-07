import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './../components/Card';
import StorysCard from './../components/StorysCard';


const _layout = () => {

  

  return (
    <ScrollView style={styles.screen}>
      <ScrollView horizontal style={styles.Storys}>
        <StorysCard />
        <StorysCard />
        <StorysCard />
        <StorysCard />
      </ScrollView>


      <Card name={"mosa"} last_name={"issa"} />
    </ScrollView>
  )
}

export default _layout

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#00000050',
    //padding: 20,
    paddingTop :50,
  },
  Storys:{
    flexDirection:'row'
  }
})