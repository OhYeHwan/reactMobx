import { observable, action, makeObservable } from "mobx";

class CounterStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _count = 3;

  get count() {
    return this._count;
  }

  @action
  increment() {
    this._count++;
    console.log(this._count);
  }

  @action
  decrement() {
    this._count--;
    console.log(this._count);
  }
}

// 생성을 해서 리턴을 해야한다
export default new CounterStore();
