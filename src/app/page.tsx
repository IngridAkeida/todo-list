"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () =>{

  const [ list, setList] = useState<TodoItem[]>([]);

  



  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-2xl bg-gradient-to-tl from-purple-600 via-blue-400 to-blue-600">
      <h1 className="text-4xl mt-5">Todo List</h1>

      <div className="flex max-w-lg my-3 p-4 rounded-md bg-white border-2 border-gray-200">
        <input 
          type="text" 
          placeholder="What do want to do?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"/>
        <button className="bg-black">Add</button>
      </div>
      <div>
        <ul className="w-full max-w-lg list-disc pl-5">
          <li className="flex">
            <p>Task 01</p>
            <button className="hover:underline">Delete</button>
          </li>
          <li className="flex">
            <p>Task 02</p>
            <button className="hover:underline">Delete</button>
          </li>  
        </ul>
      </div>
    </div>
  );

}

export default Page;