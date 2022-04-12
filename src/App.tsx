import React from 'react';
import Navigation from './components/navigation/Navigation';
import "./assets/css/vyne.css";
import { Provider } from 'react-redux'
import store from './redux/store'
// import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation></Navigation>
      </Provider>
    </div>
  );
}

export default App;
