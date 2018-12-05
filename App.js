import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'

class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyCOlDrRWHY_d_6FDVe7fk2vfFPYCQ3bAPE",
      authDomain: "manager-30cba.firebaseapp.com",
      databaseURL: "https://manager-30cba.firebaseio.com",
      projectId: "manager-30cba",
      storageBucket: "manager-30cba.appspot.com",
      messagingSenderId: "167587029322"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}> 
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App
