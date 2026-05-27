import React from 'react';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>User Directory </h1>
        <p>Simple React app fetching data from an Express backend API</p>
      </header>
      <main>
        <Users />
      </main>
      <footer>
        <p>MERN Stack Project</p>
      </footer>
    </div>
  );
}

export default App;
