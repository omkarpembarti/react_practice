import { useState } from 'react';
import './App.css';
import CustomTable from './components/CustomTable';
import LogTable from './components/LogTable';

function App() {
  const [logs, setLogs] = useState([]);
  return (
    <div className="App">
      <CustomTable setLogs={setLogs}></CustomTable>
      <LogTable records={logs}></LogTable>
    </div>
  );
}

export default App;
