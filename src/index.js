import { Button, Text, View, SafeAreaView, FlatList, Modal } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { InputTask, TaskItem } from './components';

export default function App() {
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);
  const [borderColor, setBorderColor] = useState('#C5C9E7');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBorderColor('#424D9E');
  };

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7');
  };
  const onHandlerChangeText = text => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    setListTasks([
      ...listTasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    setTask(' ');
  };

  const onHandlerModal = item => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = id => {
    setListTasks(prevList => prevList.filter(task => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerFocus={onHandlerFocus}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          task={task}
          onHandlerCreateTask={onHandlerCreateTask}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={listTasks}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            alwaysBounceVertical={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>
              Estas Seguro que deseas eliminar esta tarea ?
            </Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title='Cancel' color='#424D9E' onPress={() => setIsVisible(false)} />
            <Button title='Delete' color='red' onPress={() => onHandleDelete(selectedTask?.id)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
