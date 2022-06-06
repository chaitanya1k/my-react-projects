import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[peoples, setPeoples] = useState(data)
  
  return <main>
   
    <section className='container'>
        <h3>{peoples.length} birthday today</h3>
        <List peoples = {peoples} />
        <button onClick={() => setPeoples([])}>Clear All</button>
    </section>
   
  </main>
}

export default App;
