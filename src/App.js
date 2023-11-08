
import { useState } from 'react';
import './App.css';

function App() {
  const person={name:"Cristiano Ronaldo", age:38, img:"https://i2-prod.mirror.co.uk/incoming/article28924807.ece/ALTERNATES/s615b/0_This-handout-photo-released-on-December.jpg" }
  const [Show, setshow] = useState(false)
  return (
   <div>
    <div className='btn'>
      <button onClick={()=>setshow(!Show)}>Show player</button>
    </div>
    <div className='cont'>
{  Show?  <div className='card'>
      <img src={person.img}/>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
    </div>:null}
    </div>
    
    
   </div>
  );
}

export default App;
