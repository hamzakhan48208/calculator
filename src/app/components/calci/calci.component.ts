import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrl: './calci.component.css'
})
export class CalciComponent {
  text: string = '';
  history: string = '';
  reg= "/^[0-9+\-*/()]*$/";

  historyArray = [];

  storedHistory: string = '';

  //listen for keys
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key);

    //show history
    if(event.key === 'h' || event.key === 'H'){
      //this.history = this.storedHistory;
      this.history = '';
      this.history = this.historyArray.reverse().join('');
    }

    //clear
    if(event.key === 'c' || event.key === 'C'){
      this.clear();
    }

  }

  calculate(){
    console.log(this.text);
    try{
      const res = eval(this.text);
      //history
      this.history = this.text+ ' =';
      console.log('answer of calculator: '+res);
      this.text = res;

      //store into history
      const lastOperations = this.storedHistory + this.history + res + "<br>";
      this.historyArray.push(this.history + res + "<br>");

      this.storedHistory = lastOperations;
    }
    catch(e){
      console.log('Error');
      this.text = 'Error';
    }
  }

  keyPressed(key: string){
    this.text = this.text + key;
  }

  clear(){
    //reset all
    this.text = '';
    this.history = '';
    this.storedHistory = '';

    this.historyArray.splice(0, this.historyArray.length);
  }
}
