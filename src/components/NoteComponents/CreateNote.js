import React from 'react';
import { LinearProgress } from '@mui/material';

// import LinearProgress from "@mui/icons-material/LinearProgress"
const CreateNote = ({textHandler, saveHandler, inputText}) => {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
  return (
    <div className="note" style={{ background: "rgba(201, 76, 76, 0.3)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
       ></LinearProgress> 
    </div>
  );
}

export default CreateNote;