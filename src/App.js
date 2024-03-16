import './App.css';
import Header from './components/Header'
import User from './components/User'
import Privacy from './components/Privacy'
import Services from './components/Services'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <User />
      <Privacy />
      <Services />
    </div>
  );
}

export default App;
