
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import store from './store/store';

function Card({ surname }) {
  if (surname === "pembarti")
    throw new Error("Error in Custom Card component");
  return <div>{surname}</div>;
}


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundary>
          <div>Omkar</div>

          <div>Gopal</div>

          <div><Card surname="sai" /></div>
        </ErrorBoundary>
      </div>
    </Provider>
  );
}

export default App;
