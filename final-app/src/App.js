import Store from './screens/Store'
import Login from './screens/Login'
import Detail from './components/Detail'
import {TopNavBar} from './components/navbar'
import { Footer } from './components/footer';
import './App.css';
import Count from './components/Count'


function App() {
  return (
    <>
    
      <TopNavBar/>
      {/* <Count /> */}
      <br></br>
      <hr/>
      <Store/>
      {/* <Detail /> */}
      <br/>
      {/* <Login/> */}
      <br />
      <Footer/>
    </>
  );
}

export default App;
