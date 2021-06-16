import React, { Component } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Counter extends Component {
  number = 0;

  constructor() {
    super();
    makeObservable(this, {
      // 예전 버전의 mobx에서는 decorate 사용,  최신버전에서 makeObservable사용
      number: observable, // observable이니 내가 관찰할 상태
      increase: action, // action 이니 상태의 변화를 일으킬 친구
      decrease: action, // action 이니 상태의 변화를 일으킬 친구
    });
  }

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default observer(Counter);
