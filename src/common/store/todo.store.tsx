import { observable } from 'mobx'
import { RootStore, RootStoreFactory } from '.'

export interface TodoModel {
    hello?: string
    id: number
    text: string
    done: boolean
}

export class TodoStore implements RootStoreFactory {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    @observable todos: TodoModel[] = [
        { text: 'hello', id: 1, done: false },
        { text: 'world', id: 2, done: true },
        { text: 'hello', id: 3, done: true }
    ]
    addTodo(todo: TodoModel) {
        this.todos.push(todo)
    }
    getTodoById(id: number): TodoModel | undefined {
        return this.todos.find(todo => todo.id === id)
    }
}
