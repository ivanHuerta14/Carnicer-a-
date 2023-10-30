import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    // Simulamos una validación de inicio de sesión aquí
    if (this.state.username === 'usuario' && this.state.password === 'contraseña') {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <header className="App-header">
          <h2>Bienvenido, {this.state.username}.</h2>
          <button onClick={() => this.setState({ isLoggedIn: false })}>Cerrar sesión</button>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
           <header className="App-header">
           <img src="/logo.png" alt="Logo de carniceria" />
          <h2>Inicio de sesión</h2>
          
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleLogin}>Iniciar sesión</button>
          
          </header>
        </div>
      );
    }
  }
}

export default Login;