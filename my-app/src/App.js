import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline'
import './appStyles.css';
// import styles from './appStyles.module.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">

    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}

      <Card 
      title=' Alert! '
      body=' Hi guys! '
      />

    
    {/* <Inline /> */}
      
    {/* <Stylesheet primary={true}/> */}
    
    {/* <EventBind /> */}
    
    {/* <ClassClick /> */}
    
    {/* <FunctionClick></FunctionClick>   */}
      
      {/* <Counter /> */}


      {/* <Message /> */}

     { /*<Greet  name="Leo" Goals="734" />
      <Greet name="Cristiano" Goals="770">
        <button>HE IS THE  GOAT!!!!</button>  
      </Greet>

      <Greet name="Karim"  Goals="365">
        <p>KARIM!!!! BENZEMA!!!!!</p>
      </Greet>
      
      
      
      <Welcome name="Sam Wilson" heroName="The Falcon" />
      <Welcome name="Bucky Barnes" heroName="The Winter Soldier" /> */}
      
      {/* <Welcome name="Tony Stark" heroName="Iron Man" /> */}
    </div>
  );
}

export default App;
