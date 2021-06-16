import { makeAutoObservable } from 'mobx';

class MoneyStore {
  money = 10000;

  constructor() {
    makeAutoObservable(this);
  }

  work = () => {
    console.log('work');
    this.money = this.money + 1000;
  };
  rest = () => {
    console.log('rest');
    this.money = this.money - 1000;
  };
}

const moneyStore = new MoneyStore();
export default moneyStore;
