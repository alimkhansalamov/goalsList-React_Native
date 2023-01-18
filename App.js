import React from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // states
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [courseGoals, setCourseGoals] = React.useState([]);

  // methods

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  // add a goal
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
    endGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addNewGoalButton}>
          <Button title="Add new goal" color={'#5e0acc'} onPress={startAddGoalHandler} />
        </View>

        <View style={styles.goalsContainer}>
          {courseGoals.length > 0 ? (
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return <GoalItem item={itemData.item} deleteGoal={deleteGoalHandler} />;
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          ) : (
            <View style={styles.imageContainer}>
              <Image source={require('./assets/images/nogoalsyet.png')} style={styles.image} />
            </View>
          )}
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancelGoal={endGoalHandler}
          visible={modalIsVisible}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  addNewGoalButton: {
    marginTop: 10,
    marginBottom: 15,
  },
  imageContainer: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
});
