
import './App.css';
import Top from './assets/top.png'
import Logo from './assets/logo.png'
function App() {
  return (
    <div className="main ">
      <img src={Top} alt='' className='top-img'/>
      <div className='logo-div'>
        <img src={Logo} alt=''/>

      </div>
      <div>
      <h1>new</h1>
      </div>
    
    </div>
  );
}

export default App;
