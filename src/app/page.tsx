"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () =>{

  // see item on main page
  const [ list, setList] = useState<TodoItem[]>([
    //{id: 0, label: 'Fazer alguma coisa 1', checked: false },
  ]);

  // add item on main page 
  const [ itemImput, setItemImput] = useState('');

  const handleAddBtn = () => {
    if(itemImput.trim() === '') return;
    //trim() -> Eliminates whitespace at the beginning and end

    setList([
      ...list, 
      { id: list.length, label: itemImput, checked: false}
    ]);
    setItemImput('');
  }

  //remove item on main page

  const deleteItem = (id:number) => {

    /* without id 
    const newListDeleted = list.filter((item, key) => key !== index);*/
    const newListDeleted = list.filter(item => item.id !== id);
    setList(newListDeleted);
  }

   //change item on main page

  const toggleItem = (id:number) => {

    let newList = [...list];
    /*without id 
    newList[index].checked = !newList[index].checked;*/
    newList[id].checked = !newList[id].checked;
    /*
    other way to do this 
    for(let i in newList) {
      if(newList[i].id === id){
        newList[i].checked = !newList[i].checked;
      }
    }*/
    setList(newList);
  }


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-2xl bg-gradient-to-tl from-purple-600 via-blue-400 to-blue-600">
      <h1 className="text-4xl mt-5">Todo List</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-white border-2 border-gray-200">
        <input 
          type="text" 
          placeholder="What do want to do?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemImput}
          onChange={e=> setItemImput(e.target.value)}/>
        <button 
          className="bg-black"
          onClick={handleAddBtn}>Add</button>
      </div>

      <div>
        <h2 className="my-4">{list.length} items</h2>
        <ul className="w-full max-w-lg list-disc pl-5">
          {/*without id {list.map((item, index) => (*/}
          {list.map(item => (
            <li className="flex">
              {/*toggleItem(index)*/}
              <input 
                className="w-6 h-6 mr-3 mt-1"
                type="checkbox" 
                checked={item.checked} 
                onClick={() => toggleItem(item.id)}/>
              {/*<p key={index}>{item.label}</p>*/}
              <p key={item.id}>{item.label}</p>
              {/*deleteItem(index)*/}
              <button 
                className="hover:underline"
                onClick={() => deleteItem(item.id)}>
                  Delete
              </button>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );

}

export default Page;