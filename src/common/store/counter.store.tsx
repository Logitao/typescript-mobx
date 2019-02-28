import { observable } from 'mobx'
import { RootStore } from '.'

export class CounterStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
    @observable count = 0
}
