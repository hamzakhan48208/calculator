import { Component } from '@angular/core';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})
export class ForexComponent {
  text: string = '';
  currencyOne: string = 'USD';
  currencyTwo: string = 'EUR';
  statement: string = '';
  res: string = '';

  keyPressed(value: string){
    this.text = this.text + value;
  }
  calculate(){
    console.log(this.currencyOne);
    console.log(this.currencyTwo);
    console.log(this.text);

    //logic
    fetch(`https://api.exchangerate-api.com/v4/latest/${this.currencyOne}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[this.currencyTwo];

      this.statement = `1 ${this.currencyOne} = ${rate} ${this.currencyTwo}`;

      const amountOne = parseFloat(this.text);
      this.res = (amountOne * rate).toFixed(2);

      console.log(this.statement);
      console.log(this.res);
    })
  }

  clear(){
    this.text = '';
  }

  onCurrencyOne(value: any){
    console.log(value.target.value);
    this.currencyOne = value.target.value;
  }

  onCurrencyTwo(value: any){
    console.log(value.target.value);
    this.currencyTwo = value.target.value;
  }
}
