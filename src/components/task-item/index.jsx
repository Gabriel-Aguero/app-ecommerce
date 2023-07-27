import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const TaskItem = ({ onPressItem, item }) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
      <View style={styles.taskItemCheck}>
        <Text style={styles.iconAdd}>👍</Text>
        <Text style={styles.listItem}> {item.value} </Text>
      </View>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
