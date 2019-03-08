import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { RootStoreContext } from '../common/store'
import { TodoModel } from '../common/store/todo.store'

const App = observer(() => {
    const { counterStore } = React.useContext(RootStoreContext)
    return (
        <Fragment>
            <h1>{counterStore.count}</h1>
            <button onClick={() => counterStore.count++}>Increment</button>
            <hr />
            <TodoForm />
        </Fragment>
    )
})

const TodoForm = observer(() => {
    const { todoStore } = React.useContext(RootStoreContext)
    return (
        <Fragment>
            {todoStore.todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
            <button
                onClick={() =>
                    todoStore.addTodo({
                        text: 'test',
                        done: false,
                        id: Math.random() * 42355677312663412 + 1
                    })
                }
            >
                Click
            </button>
        </Fragment>
    )
})

interface TodoItemProps {
    todo: TodoModel
}
const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo }) => {
    if (todo) {
        return (
            <div
                style={{
                    cursor: 'pointer',
                    textDecoration: todo.done ? 'line-through' : 'none'
                }}
            >
                {todo.text}
            </div>
        )
    } else return null
})
export default App
