import Task from "./Task";

export default function ListTasks() {
  return(  
    <div className="border border-black h-screen w-full flex flex-col items-start justify-start p-5 text-lg">
      <p className="mx-auto mb-3">To do</p>
      <Task /> {/* Componente el cual se repite porque esta iterando sobre las diferentes tareas */}
    </div>
  )
};
