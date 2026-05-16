import * as React from "react"
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react"

interface TodoItemProps  {
  text: string,
  isCompleted: boolean,
  id: string,
}

function TodoItem(props: TodoItemProps) {
  const {id, text, isCompleted} = props;
  return (
    <div key={id} className="flex gap-1 w-full items-center">
      <input type="checkbox" checked={isCompleted} />
      <div className="flex-1">
        {text}
      </div>
      <Button variant="text">
        <EditIcon />
      </Button>
      <Button variant="text">
        <TrashIcon />
      </Button>
    </div>
  );
}

export default TodoItem;