import { action, makeObservable, observable } from 'mobx';

class CountStore {
  number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });

    // makeAutoObservable(this);
  }

  increase = () => {
    console.log('increase');
    this.number++;
  };
  decrease = () => {
    console.log('decrease');
    this.number--;
  };
}

const countStore = new CountStore();
export default countStore;
