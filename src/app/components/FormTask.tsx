'use client'

import { ChangeEvent, useState } from "react";
import useTodoStore from "@/stores/storetodo";

export default function FormTask() {

  // Estado local para manejar el input de la nueva tarea
  const [newTodoTitle, setNewTodoTitles] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');
  const [error, setError] = useState(false);
    

  // Estado global (array) y funciones del estado para poder hacer uso de ellas
  const { addTodo } = useTodoStore();
  const list = useTodoStore((state) => state.todos);
  
  // Manejador de eventos
  const handleAddTodo = () => {
    if(newTodoTitle.trim() === '' || newTodoDescription.trim() === ''){
    setTimeout(() => {
      setError(false); // se desactiva el error
    }, 2000)     
    setError(true); // se activa el error
    return;
    } // Evitar tareas vacias

    addTodo({ title: newTodoTitle, description: newTodoDescription, completed: false}); // Agregar tareas que se va a setear en newTodo
    setNewTodoTitles(''); // limpiar los campos de entrada
    setNewTodoDescription(''); 
    setError(false);
    
  };

  return(
    <div className="text-lg w-2/5 h-screen border border-black p-6 flex flex-col gap-4 pt-6 bg-stone-400">
      {/* Formulario para agregar las tareas */}
      <p className="text-lg">New task</p>
      <input 
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitles(e.target.value)}
        placeholder="Escriba una tarea"
        className="bg-white mt-2 h-9 focus:outline-none p-2"
      />
      <textarea 
        value={newTodoDescription}
        onChange={(e) => setNewTodoDescription(e.target.value)}
        placeholder="Escriba una tarea"
        className="bg-white h-48 focus:outline-none p-2"
      />
      {error && <p className="text-red-900">Rellene los campos vacios</p>}
      <button onClick={handleAddTodo} style={{color: 'white', backgroundColor: '#670002'}} className="ml-0 p-3 rounded-md">Add task</button>      
    </div>
  )
};
