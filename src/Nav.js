import React, { useState } from 'react';

// Componente de búsqueda
const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={term}
        onChange={handleInputChange}
      />
      <button className="Button" onClick={handleSearch}>Buscar</button>
    </div>
  );
};
export default function Nav({ onSearch }){

    return (
    <nav className="nav">
    <a href="/CompanyHistory" className="site-title">
    <img src="/logo.png" alt="Logo" className="logo-image" />
        Cortes selectos al vacío HM
    </a>
    <ul>
    <li className="active"></li>
    <li className="active"></li>
    <li className="active"></li>
    </ul>
    <SearchBar onSearch={onSearch} />
    </nav>
    )
    }