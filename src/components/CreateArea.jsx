import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  let [checked, setChecked] = React.useState(false);

  let boxClicked = () => {
    setChecked(true);

  };



  return (
    <div>
      <form className="create-note">
        {checked ? 
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"          
        /> : null }
      

        <Zoom in={true} timeout={2000}>
        <textarea 
          onClick={boxClicked}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={checked ? 3 : 1}
        />
        </Zoom>
       
        <Zoom in={checked} timeout={1400} >
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>


      <Box sx={{ "& > :not(style)": { m: 1 } }}>

        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>

        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>

        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>

        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>

      </Box>
    </div>
  );
}

export default CreateArea;
