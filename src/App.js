import { observer } from 'mobx-react';
import store from './store/store';

const App = observer(() => {
  const { countStore, moneyStore } = store;

  return (
    <div>
      <h1>카운트 스토어</h1>
      <hr />
      <h1>{countStore.number}</h1>
      <button onClick={countStore.increase}>+1</button>
      <button onClick={countStore.decrease}>-1</button>

      <h1>머니 스토어</h1>
      <hr />
      <h1>{moneyStore.money}</h1>
      <button onClick={moneyStore.work}>+1000</button>
      <button onClick={moneyStore.rest}>-1000</button>
    </div>
  );
});

export default App;
