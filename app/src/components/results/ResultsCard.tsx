import React, { useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'
import storeCalcData from '../../helpers/storeCalcData'
import useUser from '../../hooks/useUser'
import { Results } from '../../interfaces/form.interfaces'
import CustomButton from '../buttons/CustomButton'

interface Props{
    results:Results[]
}


const ResultsCard = ({results}: Props) => {
    console.log('results cards',results)
    const user = useUser();
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [message, setMessage] = useState('');
 


    const handleSubmit = async () => {
      setSaving(true)
      const data = {
        userId: user?.uid || '',
        results: results
      };
     const response = await storeCalcData(data);
     setSaving(false)
     if(response.status === 200){
      setSaved(true)
      setMessage(response.message)
     }
     if(response.status === 400){
      setSaved(false)
      setMessage(response.message)
     }
     if(response.status === 500){
      setSaved(false)
      setMessage(response.message)
     }
     console.log(response.status)
    
    }


    
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
{saved ? <Text style={[Fonts.fontcolorgreen, Fonts.fontmd, Fonts.fontweightbold, { textAlign: 'center' }]}>{message}</Text>: <>
  {saving ? <ActivityIndicator size="large" color={Colors.primary} /> :
           <CustomButton
           title={'Guardar'}
           onPress={handleSubmit}
           color={Colors.green}
         />
            
            }
</>}




 

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