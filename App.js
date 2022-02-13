import { View, Text, StatusBar, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Cards from './components/Cards'

export default function App() {
 

  return (
    <>
      <StatusBar backgroundColor='#540B61' />

      <View style={{ paddingVertical: 10, paddingHorizontal: 8, backgroundColor: '#540B61', height: '100%' }}>
        <Text style={styles.header}>Memory Game</Text>
       

        <View style={{ justifyContent:'center'}}>
          <Cards />
        </View>
      
       
      </View>
    </>

  )
}
const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#F3F3A2',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed'
  },
 
})
