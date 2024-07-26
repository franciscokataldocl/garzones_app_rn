import React from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'
import { Results } from '../../interfaces/form.interfaces'

interface Props{
    results:Results[]
}


const ResultsCard = ({results}: Props) => {
    console.log('results cards',results)
  return (
    <SafeAreaView style={styles.container}>
    <View>

    <FlatList
        data={results}
        renderItem={({item}) => (
          <View style={styles.renderList}>
          <View style={styles.keyContainer}><Text style={[Fonts.fontmd, Fonts.fontweightnormal, Fonts.poppinsmedium ]}>{item.name}</Text></View>
          <View style={styles.valueContainer}><Text style={[Fonts.fontmd, Fonts.fontweightnormal, Fonts.poppinsbold ]}>${item.value}</Text></View>
          
            
          </View>
        )}
      />

    </View>
  </SafeAreaView>
  )
}

export default ResultsCard 

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,

  },
  item: {
    
    padding: 20,
    marginVertical: 8,
  },
  header: {


  },
  title: {
    color:Colors.primary,
    width: '78%',
    

  },
  value: {
    color:Colors.primary,

   

  },
  renderList:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:'4%',
    paddingVertical:'4%',
    backgroundColor:Colors.greyUltraLight,
    marginBottom:'5%',
    borderRadius:3
  },
  keyContainer:{
   
    width: '70%',
  },
  valueContainer:{
   
  }
});