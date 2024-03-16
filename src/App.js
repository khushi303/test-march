import './App.css';
import Header from './components/Header'
import User from './components/User'
import Privacy from './components/Privacy'
import Services from './components/Services'
import SecuritySec from './components/SecuritySec'
import FutherServices from './components/FutherServices'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <User />
      <Privacy />
      <Services />
      <SecuritySec />
      <FutherServices />
    </div>
  );
}

export default App;
