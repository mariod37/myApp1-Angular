import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template: `
  <hr>
  <h3>Contador:{{counter}}</h3>

  <button (click)="contador(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>

  <button (click)="contador(-1)">-1</button>

`
})

export class CounterComponent  {
  counter: number = 10;

  contador(value:number){
    this.counter += value
  }
  resetCounter(){
    this.counter = 0;
  }

}
