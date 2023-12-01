
import CompanyHistory from './CompanyHistory';
import ContactForm from './ContactForm';
import Login from './Login';
import PurchaseSummary from './PurchaseSummary';
import './App.css';
import Navbar from './Navbar';
import './style.css';
import Catalogo from './Catalogo';

function App() {
  const compra = {
    imagen: 'https://thefoodtech.com/wp-content/uploads/2020/05/carne-de-res.jpg',
    descripcion: 'Producto de ejemplo',
    cantidad: 2,
    precio: 15.99,
    total: 31.98,
  };

  let coma 
  let component
  switch (window.location.pathname){
    case "/CompanyHistory":
     component = <CompanyHistory />
     
    break
    case "/CompanyHistoria":
    component = <CompanyHistory />
     break
     case "/Login":
     component = <Login />
    break
     case "/ContactForm":
    component= <ContactForm/>
    break
    case "/PurchaseSummary":
      component = <PurchaseSummary producto={compra} />;
      break
      case "/Catalogo":
      component = <Catalogo />
      break
  }
  
  return (
  
  
  <div>
  
  {window.location.pathname === '/Login' && <Navbar />}
  {window.location.pathname === '/CompanyHistory' && <Navbar />}
  {window.location.pathname === '/ContactForm' && <Navbar />}
  {window.location.pathname === '/PurchaseSummary' && <logiNavbar />}
  {component}
  </div>
  
  );
}

export default App;