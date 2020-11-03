import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const GoalItem = props => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  ) 
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1
  }
})

export default GoalItem