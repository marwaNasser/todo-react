import { useState } from "react"


export const ToDoForm = () => {
    const [value, setValue] = useState("");
    return(
        <form className="ToDoForm"
        >
            <input className="todo-inpt" type="text" placeholder="new task..?" onChange={(e) => console.log(e.target.value)} />
            <button className="todo-btn" type="submit">add</button>
        </form>
    )
}