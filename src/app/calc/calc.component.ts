import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  private isOn = false;

  click(){
    this.isOn = !this.isOn;
  }


  get message() {
    return ` the light is ${this.isOn ? 'ON' : 'OFF'} `
  }

}
