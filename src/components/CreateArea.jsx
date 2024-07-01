import React from "react";

function CreateArea(props) {
    const [newItem,setItem] = React.useState({
        title:"",
        content:""
    });
    
    function createItem(event){
        const {name,value} = event.target;
        setItem(prev=>({
            ...prev,
            [name]:value
        }));
      
    }

    
  return (
    <div>
      <form >
        <input  onChange={createItem} name="title" placeholder="Title" value={newItem.title} />
        <textarea onChange={createItem} name="content" placeholder="Take a note..." rows="3" value={newItem.content}  />
        <button onClick={event=>{
        console.log(newItem);
        props.addItem(newItem);
        setItem({
            title:"",
            content:""
        });
        event.preventDefault()
      }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
