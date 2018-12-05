import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) =>{
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'}/>
    </View>
  )
}

const styles = {
  spinnerContainer: {
    flex: 1,
    JustifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner } 
