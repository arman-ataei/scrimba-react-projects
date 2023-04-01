import React from 'react'
import { nanoid } from "nanoid";
// ---------------------------------------------..//
import Split from "react-split";
// ---------------------------------------------//
// Custom Components
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data";
// --------------------------------------------//
// ReactBootstrap components
// import { Container } from 'react-bootstrap';
// --------------------------------------------//
// Custom css Styles
import './App.css'
// --------------------------------------------//
// react-mde styles
import "react-mde/lib/styles/css/react-mde-all.css";

function App() {
  // this app has two states:
  // one for list of notes
  // the other for saving the id of the note that is edditing/selected
  // -------------------------------------------------------------------//
  // syncing notes with local storage in two steps:
  // step1: saving notes to the localstorage:
  //        localstorage.setItem("key",JSON.stringify(value))
  // step2: initializing the notes state by the data save on local storage:
  //        JSON.parse(localstorage.geItem("key"))
// --------------------------------------------------------------------------------------//
// lazy state initialization
// using a callback in teh useState function for preventing the code to run everytime the component renders
// --------------------------------------------------------------------------------------//
// add the following fetures to the app:
//      1.last edit (time and date) 
//      2.use regEx to get the right title from the first line, withought the markdown characters (done)
// --------------------------------------------------------------------------------------//

  const [notes, setNotes] = React.useState(()=>JSON.parse(localStorage.getItem("notes")) || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )
  React.useState(()=>{
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])
  function createNewNote() {
      const newNote = {
          id: nanoid(),
          body: "# Type your markdown note's title here"
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
    // inserting the note that has been updated/added recently at the top of the list:
      setNotes(oldNotes => {
          // 1. we need to change the state of the app, more specificly notes
        const newNotes = []
        for (let i=0 ; i< oldNotes.length ; i++){
          const oldNote = oldNotes[i]
          // 2. find the currentNode that is changing and unshift it to the notes
          if(oldNote.id === currentNoteId ){
            newNotes.unshift({...oldNote, body: text})
          }else{
          // 3. or just push the new array to the notes
            newNotes.push(oldNote)
          }
        }
        return newNotes
        
      //   oldNotes.map(oldNote => {
      //     return oldNote.id === currentNoteId
      //         ? { ...oldNote, body: text }
      //         : oldNote
      // })
      }
      )
  }
  
  function findCurrentNote() {
      return notes.find(note => {
          return note.id === currentNoteId
      }) || notes[0]
  }

  function deletNote(event, noteId){
    event.stopPropagation() //invoking this method prevents event from reaching any objects other than the current object.
    // console.log("deleted note", noteId)
    setNotes(prevNotes => prevNotes.filter( note => note.id !== noteId))
  }

  return (
    <div className="my-5">
    {
        notes.length > 0 
        ?
        <Split 
            sizes={[30, 70]} 
            direction="horizontal" 
            className="split"
        >
            <Sidebar
                notes={notes}
                currentNote={findCurrentNote()}
                setCurrentNoteId={setCurrentNoteId}
                newNote={createNewNote}
                deletThisNote={deletNote}
            />
            {
                currentNoteId && 
                notes.length > 0 &&
                <Editor 
                    currentNote={findCurrentNote()} 
                    updateNote={updateNote} 
                />
            }
        </Split>
        :
        <div className="no-notes">
            <h1>You have no notes</h1>
            <button 
                className="first-note" 
                onClick={createNewNote}
            >
                Create one now
            </button>
        </div>
        
    }
    </div>
  )
}

export default App
