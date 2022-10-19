import {React, useEffect, useState} from 'react';
import "../css/Note.css";
import CreateNote from './CreateNote';
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Notes = () => {
    
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");

    const textHandler = (e) => {
        
        setInputText(e.target.value);
        if(!notes && !inputText){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Keep your notes here'
            })
        }
        
    };
    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuidv4(),
                text: inputText,
            },

        ]);
        setInputText("");
    };
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if(data) {
            setNotes(data);
        }
    }, []);

  return (
    <div className='notes'>
        

        {notes.map((note) => (
            <Note
                key={note.id}
                id={note.id}
                text={note.text}
                deleteNote={deleteNote}>

            </Note>

        ))}

        
        <CreateNote
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}>

        </CreateNote>
    </div>
  );
}

export default Notes;