import React from "react";
import TodoFilter from "./TodoFilter";
import AddTodo from "./AddTodo";
import FooterAction from "./FooterAction";
import TodoList from "./TodoList";
const TodoForm = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
                <h1 className="text-center text-2xl font-semibold mb-4">
                    Quản lý công việc
                </h1>
                <AddTodo/>
                <TodoFilter />
                <TodoList/>
                <FooterAction/>
            </div>
        </div>
    );
};

export default TodoForm;