import React, { useState } from 'react';
import './App.css';
import CompanyHistory from './CompanyHistory';
import ContactForm from './ContactForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {showForm ? <ContactForm /> : <CompanyHistory />}
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Registrate' : 'inicio'}
        </button>
      </header>
    </div>
  );
}

export default App;