"use client"

import React, { useState, useEffect }  from "react"
import { v4 as uuidv4 } from 'uuid';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { TodoItem, TodoItemData, TodoItemProps } from "@/components/TodoItem";

function TodoList() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: any) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const newTodoItem: TodoItemData = {
      id: uuidv4(),
      text: newTodo,
      isCompleted: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  }

  const onAddTodoChange = (e: any) => {
    setNewTodo(e.target.value);
  }

  const toggleTodoItemComplete = (id: string) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    }));
  }

  return (
    <>
      <form className="flex gap-1 w-full my-4" onSubmit={handleAddTodo}>
        <Input type="text" id="add-task" placeholder="Add todo item" value={newTodo} onChange={onAddTodoChange} />
        <Button type="submit" variant="secondary">Add</Button>
      </form>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          id={todo.id} 
          text={todo.text}
          isCompleted={todo.isCompleted}
          toggleTodoItemComplete={toggleTodoItemComplete}
        />
      ))}
    </>
  );
}

export { TodoList };