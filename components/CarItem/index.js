import { View, Text , ImageBackground} from 'react-native'
import React from 'react'
import styles from './styles'

export default function CarItem(props) {
  return (
    <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style={styles.image}
        
        />
        <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
    </View>
  )
}