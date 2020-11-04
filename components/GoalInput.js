import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={ styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
           <Button title="CANCEL" color="red" onPress={() => props.cancelAddGoalHandler()} />
          </View>
          <View style={styles.button}>
            <Button style={styles.button} title="ADD"  onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
})

export default GoalInput