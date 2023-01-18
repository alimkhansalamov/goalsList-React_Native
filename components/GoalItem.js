import { View, Text, StyleSheet, Pressable } from 'react-native';
const GoalItem = ({ item, deleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#fff' }}
        // style={(pressData) => pressData.pressed && styles.pressedItem}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoal.bind(this, item.id)}>
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#5eb1ec',
  },

  goalItemText: {
    padding: 5,
    color: '#fff',
  },
  // for iOS
  pressedItem: {
    opacity: 0.5,
  },
});
