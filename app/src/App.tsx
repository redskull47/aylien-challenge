import { Provider } from 'react-redux';
import store from './config/store';

import Stories from './views/Stories/Stories';

function App() {
  return (
    <div className="App">
      <h3>Front end challenge</h3>
      <Provider store={store}>
        <Stories/>
      </Provider>
    </div>
  );
}

export default App;
