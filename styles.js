import { StyleSheet, StatusBar } from 'react-native'

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginHorizontal:20,    
      paddingTop: StatusBar.currentHeight,
    },
    inputContanier:{
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    input:{
      flex:0.95,
      borderWidth:1,
      borderRadius: 10,
      paddingHorizontal: 10,
      color: '#212121',
      height: 40,
      borderColor: '#424D9E',
      fontSize: 14,
    }
  });