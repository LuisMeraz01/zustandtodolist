
import {create} from 'zustand';
import {persist} from 'zustand/middleware'

// Estructura basica que tendran las tareas del
// to do list, string para el texto de la tarea y boolean para activar el completado de la tarea
interface Todo { 
    title: string,
    description: string;
    completed: boolean
}

interface TodoState { // Estructura que tendra el estado entero de la lista de tareas
  todos: Todo[]; // Array de las tareas
  addTodo: (todo: Todo) => void; // funciones que tendra el estado
  removeTodo: (index: number) => void; 
  toggleTodo: (index: number) => void; 
}

// Creacion del estado global del array donde estaran las tareas con las funcionas que determinamos en la interfaz anterior
const useTodoStore = create<TodoState>(
    
  (set, get) => ({
  
    todos: [], // Estado inicial del array

    addTodo: (todo) => set((state) => ({ // funcion para agregar un elemento al array con el spreadoperator
        todos: [...state.todos, todo] 
    })),

    removeTodo: (index) => set((state) => ({ // funcion para remover un elemento de la lista
        todos: state.todos.filter((_, i) => i !=index), // Eliminar una tarea por su indice
    })),

    toggleTodo: (index) => set((state) => ({ // funcion para poder activar o desactivar una tarea para marcarla como completada o no

        //     iterar sobre array / elemento / condicion /   seccion del if si se cumplio       / si no (else)                  
        todos: state.todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed} : todo ),
    })),

  }),
       
    
);

export default useTodoStore; // Exportar el estado global de la lista de tareas (todo list)