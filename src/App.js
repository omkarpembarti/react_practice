
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

function Card({ surname }) {
  if (surname === "pembarti")
    throw new Error("Error in Custom Card component");
  return <div>{surname}</div>;
}


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <div>Omkar</div>

        <div>Gopal</div>

        <div><Card surname="sai" /></div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
