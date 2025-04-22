import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <ul className="space-y-2 mb-4 max-h-[270px] overflow-y-auto">
            {todos &&
                todos.map((todo, index) => {
                    return <TodoItem data={todo} key={todo.id || index} />;
                })}
        </ul>
    );
};

export default TodoList;