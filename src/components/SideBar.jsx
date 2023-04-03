import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => 
        {
          // using a regex to exteract the 5-20 noneMarkdown characters of the first line 
          const titleText = note.body.split("\n")[0]
          let noneMarkdownRegEx = /[\$\\\w\s\.\!\?\@'"-]{5,30}/g
          const titlePatern = titleText.match(noneMarkdownRegEx)
          const TextOfTitle = titlePatern ? titlePatern.join("").trim().slice(0,30).toUpperCase() : "Your Title"
          console.log(TextOfTitle)
        return (<div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{index + 1}- {TextOfTitle}</h4>
                <p style={{fontSize: "8px", color: "red"}}>{note.lastEdit}</p>
                <button 
                    className="delete-btn"
                    onClick={(event)=>props.deletThisNote(event,note.id)}// Your onClick event handler here
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>)
      }
    )

    return (
        <section className="pane sidebar border shadow">
            <div className="sidebar--header">
                <h3 >Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
