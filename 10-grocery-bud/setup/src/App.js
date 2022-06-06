import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

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
  const [editId, setEditId] = useState(null)
  const [alret, setAlret] = useState({ show: false, message: '', type: '' })
  


  // Handle the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      showAlret(true, 'value cannot be empty', 'danger')
    } else if (name && isEditing) {
      let changeTheValue = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item;
      })
      setList(changeTheValue);
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlret(true, 'value changed', 'success')

    } else {
      showAlret(true, 'Item added to the list', 'success')
      let newItemList = { id: new Date().getTime().toString(), title: name, isComplete :false }
      setList([...list, newItemList]);
      setName('')
    }
  }

  // alret function
  const showAlret = (show = false, message = '', type = '') => {
    return setAlret({ show, message, type })
  }

  // Clear the grocery list
  const clearTheList = () => {
    showAlret(true, 'Empty list', 'danger')
    setList([])

  }

  //delete the individaul item (this logic function sending as prop to the child component)
  const deleteItem = (id) => {
    showAlret(true, 'Item removed', 'danger')
    setList(list.filter((item) => item.id !== id))
  }

  //edit the individaul item 
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)

    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
}

  // markTheItem
  const markTheItem = (id) => {
    showAlret(true,'item marked','success')
    let markTheSpecificItem = list.filter((item) => {
      if(item.id === id){
        item.isComplete = true;
      }
      return item;
    })
   setList(markTheSpecificItem);
  }

  // local storage setup
  useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list))
  },[list])
    

  return <section className='section-center'>
    <div className='groceryContainer'>

      <form className='groceryForm' >
        {alret.show && <Alert {...alret} removeAlert={showAlret} list={list} />}
        <div className='title'>
          <h3>Grocery Bud</h3>
        </div>
        <div className='form-control'>
          <input type='text'
            placeholder='e.g.snacks'
            name='grocery' value={name}
            onChange={(event) => setName(event.target.value)} />

          <button type='submit' onClick={handleSubmit}>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} deleteItem={deleteItem} editItem={editItem} markTheItem = {markTheItem} />
          <button className='clear-btn' onClick={clearTheList}>
            clear items
          </button>
        </div>
      )}


    </div>
  </section>
}

export default App;
