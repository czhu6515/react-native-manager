import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import LogInForm from './src/components/LogInForm'
import ReduxThunk from 'redux-thunk'



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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    
    return (
      <Provider store={store}> 
        <LogInForm />
      </Provider>
    );
  }
}

export default App
