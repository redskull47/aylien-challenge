import { Provider } from 'react-redux';
import './App.css';

import store from './config/store';

import Stories from './views/Stories/Stories';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Stories/>
      </Provider>
    </div>
  );
}

export default App;
