import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore()}> 
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App
