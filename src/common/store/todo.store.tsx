import { observable } from 'mobx'
import { RootStore } from '.'

interface TodoModel {
    id: number
    text: string
    done: boolean
}

export class TodoStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    @observable todos: TodoModel[] = [
        { text: 'hello', id: 1, done: false },
        { text: 'world', id: 2, done: true }
    ]
    addTodo(todo: TodoModel) {
        this.todos.push(todo)
    }
}
