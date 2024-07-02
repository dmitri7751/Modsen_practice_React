import React from 'react';
import './App.css';
import PhotoList from './components/PhotoList';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main>
        <PhotoList />
        <Counter />
        <Form />
      </main>
    </div>
  );
}

export default App;
