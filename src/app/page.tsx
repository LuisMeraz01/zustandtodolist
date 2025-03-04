'use client'
import FormTask from "./components/FormTask";
import ListTasks from "./components/ListTasks";

export default function Home() {

  return (
    <div className="flex h-full">
      <FormTask />
      <ListTasks />
    </div>
  );
}
