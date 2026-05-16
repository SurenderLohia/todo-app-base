import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import TodoItem from "@/components/TodoItem";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-md flex-col items-center py-8 px-8 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">Todo</h1>
          <form className="flex gap-1 w-full my-4">
            <Input type="text" id="add-task" placeholder="Add todo item" />
            <Button type="submit" className variant="secondary">Add</Button>
          </form>
          <TodoItem id="1" text="Item 1" isCompleted={true} />
      </main>
    </div>
  );
}
