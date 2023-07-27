import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask,
}) => {
  return (
    <View style={styles.inputContanier}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder='Add new Task'
        autoCorrect={false}
        autoCapitalize='none'
        cursorColor='#424D9E'
        selectionColor='#D4D7ED'
        placeholderTextColor='#C5C9E7'
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />

      <Button
        disabled={task.length === 0}
        title='Create'
        color='#424D9E'
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default InputTask;
