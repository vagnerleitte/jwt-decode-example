import React from 'react';
import './App.css';
import JWTDecoder from './components/JwtDecoder';

function App() {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwODUxNDgxMiwiaWF0IjoxNzA4NTE0ODEyfQ.O5f9Cxw9zVQHGbFfv6mc6gm1ULLLRVMMHCaRJREDFus"
  console.log(token)
  return (
    <div className="App">
      <header className="App-header">
      <h2>Decoded JWT</h2>
      <JWTDecoder token={token}/>
      </header>
    </div>
  );
}

export default App;
