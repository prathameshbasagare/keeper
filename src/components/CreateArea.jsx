import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import {Zoom} from "@material-ui/core";
function CreateArea(props) {
    const [newItem,setItem] = React.useState({
        title:"",
        content:""
    });
    const [isClicked,setClick] = React.useState(false);
    function clickFun(){
        setClick(true);
    }
    function createItem(event){
        const {name,value} = event.target;
        setItem(prev=>({
            ...prev,
            [name]:value
        }));
      
    }

    
  return (
    <div>
      <form className="create-note" >
        {isClicked && <input  onChange={createItem} name="title" placeholder="Title" value={newItem.title} />}
        <textarea onChange={createItem} onClick={clickFun} name="content" placeholder="Take a note..." rows={isClicked?"3":"1"} value={newItem.content}  />
        <Zoom in={isClicked}>
        <Fab onClick={event=>{
        console.log(newItem);
        props.addItem(newItem);
        setItem({
            title:"",
            content:""
        });
        event.preventDefault()
      }}>
        <AddIcon />
      </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
