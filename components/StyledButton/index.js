import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (props) => {
    const type = props.type
    const backgroundColor = type === 'primary' ? 'steelblue' : 'gray'
    const textColor = type === 'primary' ? 'black' : 'white'
    const content = props.content
    const onPress = props.onPress

  return (
    <View style={styles.containerButton}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton