import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [itemList,setList] = React.useState([]);
    function addItem(newItem){
        setList(prev=>([
            ...prev,
            newItem
        ]));
    }

    function deleteItem(id){
        setList(prevList=>{
            return prevList.filter((item,index)=>{
                return index!==id;
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />

      {itemList.map((item,index)=>{
        return <Note key={index} id={index} title={item.title} content={item.content} deleteItem={deleteItem} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
