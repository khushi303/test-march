import './App.css';
import Header from './components/Header'
import User from './components/User'
import Privacy from './components/Privacy'
import Services from './components/Services'
import SecuritySec from './components/SecuritySec'
import FutherServices from './components/FutherServices'
import Decentralized from './components/Decentralized'
import Touch from './components/Touch';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Backtotop from './assets/images/webp/uparrow.webp';
import Hatimg from './assets/images/webp/hatimg-header.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // ----------back-to-top----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);

  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });

  // -----------pre-loader-----------//
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='overflow-hidden'>
      {screenLoading ? (
        <>
          <div className='fixed min-h-screen bg-[#0C0C0C] top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='max-w-[95px] w-full'>
              <img src={Hatimg} alt="Hatimg" width={120} className='sm:w-[159.73px] animation' />
            </div>

          </div>

        </>

      ) : (
        <div className='overflow-hidden'>
          <Header />
          <User />
          <Privacy />
          <Services />
          <SecuritySec />
          <FutherServices />
          <Decentralized />
          <Touch />
          <Footer />
          <div className='fixed bottom-6 right-7 z-30 cursor-pointer '>
            <div className={backToTop ? 'sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-[50%] bg-[#BAFF00] flex items-center justify-center animate-[mover_2500ms_ease-in-out_infinite]' : 'hidden'} onClick={() => top()}>
              <img src={Backtotop} alt="Backtotop" className='sm:w-[25px] w-[20px]' />
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
