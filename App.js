import { Button, StyleSheet, Text, TextInput, View, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

  const [tast, setTask] = useState('')
  const [listTasks, setListTasks] = useState([])
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () =>{
    setBorderColor('#C5C9E7')
  }
  const onHandlerChangeText = (text) =>{
    setTask(text)
  }

  const onHandlerCreateTask = () =>{
    setListTasks([
      ...listTasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask('')
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
            onBlur={onHandlerBlur}
            onChangeText={onHandlerChangeText}
          />
          <Button title="Create" color='#424D9E' onPress={onHandlerCreateTask}/>
          <View style={styles.listContainer}>
            {
              listTasks.map((item) =>{
              <View style={styles.containerItem} key={item-id}>
                <Text style={styles.listItem}> {item.value} </Text>
              </View>
            })}
          </View>
       
        </View>
      </View>
    </SafeAreaView>
  );
}


