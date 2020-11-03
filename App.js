import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goal) => {
    setCourseGoals( currentState => [...currentState, {
      id: Math.random().toString(),
      value: goal
    }])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={ itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})