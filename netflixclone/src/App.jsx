import { useContext } from 'react';
import Header from './components/Header';
import { ConfigContext } from './context';

function App() {

const context = useContext(ConfigContext);

  return context.contextData === false ? null : (
    <div className="App">
      <Header />
    </div>
  );
}

export default App
