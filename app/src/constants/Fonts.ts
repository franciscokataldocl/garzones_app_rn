import { StyleSheet } from "react-native"
import { Colors } from "./Colors"


export const Fonts = StyleSheet.create({
    fontxl:{
      fontSize: 50,
    },
    fontlg:{
        fontSize: 40,
    },
    fontmd:{
        fontSize: 18,
    },
    fontsm:{
        fontSize: 16,
    },
    fontweightbold:{
        fontWeight: '700'
    },
    fontweightlight:{
        fontWeight: '300'
    },
        fontweightnormal:{
        fontWeight: '400'
    },
    fontcolorprimary:{
        color:Colors.primary
    },
    fontcolorsecondary:{
        color:Colors.secondary
    },
    poppinsbold:{
        fontFamily: 'Poppins-Bold'
    },
    poppinsmedium:{
        fontFamily: 'Poppins-Medium'
    },
    poppinsregular:{
        fontFamily: 'Poppins-Regular'
    },
    poppinslight:{
        fontFamily: 'Poppins-Light'
    }
  })

