import { createContext } from 'react'
import { CounterStore } from './counter.store'
import { TodoStore } from './todo.store'

export class RootStore {
    counterStore = new CounterStore(this)
    todoStore = new TodoStore(this)
}

export interface RootStoreFactory {
    rootStore: RootStore
}
export const RootStoreContext = createContext(new RootStore())
