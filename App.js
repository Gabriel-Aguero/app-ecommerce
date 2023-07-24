import { Button, StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContanier}>
          <TextInput 
            style={styles.input} 
            placeholder="Add new Task"
            autoCorrect={false}
            autoCapitalize='none'
            cursorColor='#424D9E'
            selectionColor='#D4D7ED'
            placeholderTextColor='#C5C9E7'
            onFocus={onHandlerFocus}
          />
          <Button title="Create" color='#424D9E'/>
        </View>
      </View>
    </SafeAreaView>
  );
}


