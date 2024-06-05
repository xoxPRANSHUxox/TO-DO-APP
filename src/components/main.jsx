import React, { useEffect, useState } from "react";

export default function Main() {
  const [todo, setTodo] = useState("Please Add your first task");
  const [todos, setTodos] = useState([]);
  const [editedTodoIndex, setEditedTodoIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedTodoIndex(index);
    saveToLS();
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    if (todo.trim() === "") {
      alert("Please! Write down a task");
    } else {
      setTodos([...todos, { todo: todo, isCompleted: false }]);
      setTodo("");
      saveToLS();
    }
  };

  const handleChange = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].todo = e.target.value;
    setTodos(newTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (Array.isArray(storedTodos)) {
      setTodos(storedTodos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div>
      <div className="addTodo mx-auto w-full h-auto bg-gray-200 m-12 flex flex-col items-center rounded-lg">
        <h2 className="text-lg font-bold my-2 "> Add a To Do </h2>

        <div className="w-full flex flex-row items-center justify-center ">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add your to do"
            className="text-center rounded-md border border-solid border-black h-auto
        p-2 text-bold w-3/5"
          />

          <button
            className="bg-yellow-200 text-bold w-auto h-auto mx-2 p-2 rounded-lg "
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>

        <h2 className="text-lg font-bold m-2"> Your Tasks </h2>

        <div className="todos">
          {todos.length === 0 ? (
            <div>There is no task to do.</div>
          ) : (
            todos.map((item, index) => (
              <div key={index} className="todo flex m-2 justify-end ">
                <div className={item.isCompleted ? "line-through" : ""}>
                  {editedTodoIndex === index ? (
                    <input
                      type="text"
                      value={item.todo}
                      onChange={(e) => handleChange(e, index)}
                    />
                  ) : (
                    <p className="m-2 text-bold ">{item.todo}</p>
                  )}
                </div>

                {editedTodoIndex === index ? (
                  <button
                    className="bg-green-200 text-bold w-auto h-auto mx-3 p-2 rounded-lg"
                    onClick={() => setEditedTodoIndex(null)}
                  >
                    Done
                  </button>
                ) : (
                  <button
                    className="bg-yellow-200 text-bold w-auto h-auto mx-3 p-2 rounded-lg"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-yellow-200 text-bold w-auto h-auto mx-1 p-2 rounded-lg "
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
