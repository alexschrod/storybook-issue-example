import React, { useState } from 'react';
import './App.css';
import NormalInput from './NormalInput';
import DataListInput from './DatalistInput';

function App() {
  const [normal, setNormal] = useState<string>('');
  const [list, setList] = useState<string>('');
  return (
    <div className="App">
      <header className="App-header">
        <NormalInput
          value={normal}
          onValueChange={(newValue) => setNormal(newValue)}
        />
        <DataListInput
          value={list}
          onValueChange={(newValue) => setList(newValue)}
          list={['one', 'two', 'three']}
        />
      </header>
    </div>
  );
}

export default App;
