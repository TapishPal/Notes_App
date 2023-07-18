import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import Search from './components/Search'
import NotesList from './components/notesList'

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('react-notes-app-data')
    ) || []); 

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id!=id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText} />
        <NotesList 
          notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )} 
          handleAddNote={addNote} 
          handleDeleteNote ={deleteNote}
        />
      </div>
    </div>
  )
}
export default App