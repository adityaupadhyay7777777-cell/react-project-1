import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'


function App() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem("input")
    if (!stored) return []
    else {
      const parsed = JSON.parse(stored)
      return Array.isArray(parsed) ? parsed : [parsed]
    }
  })
  function handleSubmit(e) {
    e.preventDefault()
    const newNote = { title: e.target.title.value, desc: e.target.desc.value }
    const updated = [...notes, newNote]
    setNotes(updated)
    localStorage.setItem("input", JSON.stringify(updated))
    e.target.title.value = ""
    e.target.desc.value = ""
  }
  function handlebutton(e) {
    e.preventDefault()


  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <main>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='title' id='name'>Title</label>
          <input name='title' type='text'></input>
          <label htmlFor='desc' id='desc'>Description</label>
          <textarea name='desc'></textarea>
          <button>Add</button>
        </form>
      </main>
      <br></br>
      <section className='section'>
        <h2>Created Notes</h2>
        <div className='container'>
          {notes && notes.map((note, index) => (
            <div>
              <h3>{note.title}</h3>
              <button onClick={() => {
                const updated = notes.filter((note, i) => i !== index);
                setNotes(updated);
                localStorage.setItem("input", JSON.stringify(updated));
              }}>Del</button>
              <p>{note.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
