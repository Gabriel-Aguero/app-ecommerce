import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#2121210',
    backgroundColor: '#D4D7ED',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 15,
    elevation: 3,
  },
  taskItemCheck: {
    flexDirection: 'row',
  },
  iconAdd: {
    fontSize: 18,
    color: 'green',
  },
  listItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
  },
});
