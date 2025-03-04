import useTodoStore from "@/stores/storetodo";

export default function Task() {

  const { todos, toggleTodo, removeTodo } = useTodoStore();

  return(
    <ul className="w-full"> 
      {todos.map((todo, index) => (
        <div key={index} className="my-2.5 bg-gray-50 w-full h-fit rounded-sm flex items-center justify-between p-4"> 
          <section>
            <p className="text- font-bold cursor-default">{todo.title}</p>
            <span 
              onClick={() => toggleTodo(index)} 
              style={{ color: 'black'}} 
              className={`${todo.completed ? 'line-through text-red-600' : ''} cursor-pointer`}
            >
              {todo.description}
            </span>
          </section>
          <button 
            onClick={() => removeTodo(index)} 
            style={{ marginLeft: 20, color: 'white', backgroundColor: '#670002', borderRadius: 5}} 
            className={`px-5 py-2 cursor-pointer`}
          >
            Delete
          </button>   
        </div>
      ))}
    </ul>
  )
}