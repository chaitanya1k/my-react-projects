import React, { useEffect, useState } from "react";
import GroceryList from './GroceryList'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}



function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null)
  const [complete, setComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      return alert('name cant be empty')
    }

    else if (isEditing && name) {
      let changeTheValue = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item
      })
      setList(changeTheValue);
      setEditID(null);
      setIsEditing(false)
      setName('')
    }
    else {
      setList([...list, { title: name, id: Math.random(), isComplete: false }])
      setName('')
    }
  }

  const deleteItem = (id) => {
    let filterTheItem = list.filter((item) => item.id !== id)
    setList(filterTheItem)
  }

  const handleTheEdit = (id) => {
    let findTheItem = list.find((item) => item.id === id)
    setEditID(id)
    setIsEditing(true)
    setName(findTheItem.title)
  }

  const handleTheCheck = (id) => {
    let checkTheItem = list.map((item) => {
      if (item.id === id) {
        setComplete(!complete)
        return { ...item, isComplete: complete }

      }
      return item
    })
    setList(checkTheItem);
  }
  
  //set local storage//

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (
    <main className="section">
      <div className="grocery-contanier">
        <h1 className="title">grocery list</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input type='text' id="grocery" name="grocery" value={name} placeholder='eg.Fruits'
              onChange={(event) => setName(event.target.value)}></input>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
        <GroceryList list={list} deleteItem={deleteItem} handleTheEdit={handleTheEdit} handleTheCheck={handleTheCheck} />
        <button className="clear-btn" onClick={() => setList([])}>Clear list</button>
      </div>
    </main>
  );
}

export default App;
