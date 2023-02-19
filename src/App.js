import React from 'react';
import {add,sub,mult,div} from './Calc';



function App() {   
    return(
    
    <>
    <ul>
       <li>{add(40,3)}</li>
       <li>{sub(40,3)}</li>
       <li>{mult(4,3)}</li>
       <li>{div(4,3)}</li>
    
    </ul>
  
  </>
       
  );
}


export default App;


