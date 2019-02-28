import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { RootStoreContext } from '../common/store'

const App = observer(() => {
    const { counterStore } = React.useContext(RootStoreContext)
    return (
        <Fragment>
            <h1>{counterStore.count}</h1>
            <button onClick={() => counterStore.count++}>Increment</button>
            <TodoForm />
        </Fragment>
    )
})

const TodoForm = observer(() => {
    const { todoStore } = React.useContext(RootStoreContext)
    return (
        <Fragment>
            {todoStore.todos.map((todo, index) => (
                <div>{todo.text}</div>
            ))}
            {console.log(todoStore.todos)}
            <button
                onClick={() =>
                    todoStore.addTodo({
                        text: 'test',
                        done: false,
                        id:
                            Math.random() * 42355677312663412 +
                            42355677312663412
                    })
                }
            >
                Click
            </button>
        </Fragment>
    )
})
export default App
