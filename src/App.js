import './App.css';
import './animation.css';
import Contact from './components/contact';
import Fifth from './components/fifth';
import First from './components/first';
import Footer from './components/footer';
import Fourth from './components/fourth';
import Second from './components/second';
import Seventh from './components/seventh';
import Sixth from './components/sixth';
import Third from './components/third';

function App() {
  return (
    <div className='app'>
      <div className="container flex-col max-w-max mx-auto font-main p-0 m-0">
        <div className="">
          <div className="bg-[url('./images/pic1.png')] bg-opacity-70 bg-[#3775c5] bg-blend-overlay bg-center bg-cover bg-no-repeat">
            <First/>
          </div>
        </div>
        <div className='bg-[#345B63]'>
          <Second/>
        </div>
        <div className=''>
          <Third/>
        </div>
        <div className=''>
          <Fourth/>
        </div>
        <div className=''>
          <Fifth/>
        </div>
        <div className=''>
          <Sixth/>
        </div>
        <div className=''>
          <Contact/>
        </div>
        <div className=''>
          <Seventh/>
        </div>
        <div className=''>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
