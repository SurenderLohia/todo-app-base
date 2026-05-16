import * as React from "react"
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react"

interface TodoItemData  {
  text: string,
  isCompleted: boolean,
  id: string,
}

interface TodoItemProps  {
  text: string,
  isCompleted: boolean,
  id: string,
  toggleComplete: (id: string) => void,
}



function TodoItem(props: TodoItemProps) {
  const {id, text, isCompleted, toggleComplete} = props;

  return (
    <div key={id} className="flex gap-1 w-full items-center">
      <input type="checkbox" checked={isCompleted} onChange={() => toggleComplete(id)} />
      <div className="flex-1">
        {text}
      </div>
      <Button variant="ghost">
        <EditIcon />
      </Button>
      <Button variant="ghost">
        <TrashIcon />
      </Button>
    </div>
  );
}

export { TodoItem, type TodoItemData, type TodoItemProps };