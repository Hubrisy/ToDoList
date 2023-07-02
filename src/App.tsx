import React, { useState } from 'react';
import './App.css';

function App() {

  const [isTodo, setIsTodo] = useState('');
  const [items, setItems] = useState<{ id: number; todos: string }[]>([]);

  const addItem = () => {

    const item = {
      id: Math.random(),
      todos: isTodo,
    }

    setItems([...items, item])

    setIsTodo('')
  }

  const deleteTodoItem = (id:number) => {

    const updateList = items.filter((item) => item.id !== id);

    setItems(updateList);
  }

  return (
    <div className="App">
      <div className='main__container'>
        <h1 className='title'>To Do List</h1>
        <div className='input__container'>
          <div className='input__block'><input type="text" placeholder='type here...' value={isTodo} onChange={(e) => setIsTodo(e.target.value)} /></div>
          <div className='button__block'><button onClick={() => { addItem() }}>Add todo</button></div>
        </div>
        <div>
          <ol>{items.map((item) => {
            return (
              <div key={item.id} style={{display:'flex',alignItems:'flex-end'}}>
                <li style={{ marginTop: '10px',fontSize:'20px' }}>{item.todos}</li>
                <span style={{height:'24px',marginLeft:'5px',fontSize:'25px',cursor:'pointer'}} onClick={()=>deleteTodoItem(item.id)}>&times;</span>
              </div>
            )
          })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
