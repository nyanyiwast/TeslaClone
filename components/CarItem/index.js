import { View, Text , ImageBackground} from 'react-native'
import React from 'react'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style={styles.image}
        />
          <View style={styles.titles}>
              <Text style={styles.title}>Model X</Text>
              <Text style={styles.subtitle}>Starting at $69,420</Text>
                <StyledButton 
                type={"primary"}
                content={"Custom Order"}
                onPress={()=> {
                  console.warn('custom')
                }}
                />

                <StyledButton 
                type={"secondary"}
                content={"Existing Inventory"}
                onPress={()=> {
                  console.warn('existing')
                }}
                />
          </View>
    </View>
  )
}

export default CarItem