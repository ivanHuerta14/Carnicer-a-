
import CompanyHistory from './CompanyHistory';
import ContactForm from './ContactForm';
import Login from './Login';
import './App.css';
import Navbar from './Navbar';
import './style.css';
function App() {
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
  }
  
  return (
  
  
  <>
  <Navbar />
  {component}
  
  </>
  
  );
}

export default App;