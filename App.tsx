// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { rootStore } from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={rootStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;