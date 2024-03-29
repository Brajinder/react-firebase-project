import React from 'react'

const Todo=({ todos }) => {
    const todoList = todos.length ? (
        todos.map (todo=> {
            return (
                <div className="collection-item" key={todo.id}>
                <span>{ todo.content}</span>
                </div>
            )
        })
    ): (
        <p className="center">You have no todos left </p>
    )
    
    return (
 <div className ="todo collection">
 { todoList }
 
 </div>
    )
}

export default Todo