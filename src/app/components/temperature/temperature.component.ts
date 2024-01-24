import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  celciusText: string = '';
  farenheitText: string = '';
  kelvinText: string = '';
  active: string = 'celcius';


  keyPressed(keyValue: string){
    if(this.active == 'celcius'){
      this.celciusText = this.celciusText + keyValue;
    }
    else if(this.active == 'farenheit'){
      this.farenheitText = this.farenheitText + keyValue;
    }
    else{
      this.kelvinText = this.kelvinText + keyValue;
    }
  }

  clear(){
    this.celciusText = '';
    this.farenheitText = '';
    this.kelvinText = '';
  }

  calculate(){
    if(this.active == 'celcius'){
      const celcius = parseFloat(this.celciusText);
      // Convert to Fahrenheit
      const farenheit = (celcius * 9/5) + 32;

      // Convert to Kelvin
      const kelvin = celcius + 273.15;

      //assign value
      this.farenheitText = farenheit.toString();
      this.kelvinText = kelvin.toString();

    }
    else if(this.active == 'farenheit'){
      const farenheit = parseFloat(this.farenheitText);

      // Convert to Celsius
      const celsius = (farenheit - 32) * 5/9;

      // Convert to Kelvin
      const kelvin = (farenheit - 32) * 5/9 + 273.15;

      //assign value
      this.celciusText = celsius.toString();
      this.kelvinText = kelvin.toString();

    }
    else if(this.active == 'kelvin'){
      const kelvin = parseFloat(this.kelvinText);
      // Convert to Celsius
      const celcius = kelvin - 273.15;

      // Convert to Fahrenheit
      const farenheit = (kelvin - 273.15) * 9/5 + 32;

      //assign value
      this.celciusText = celcius.toString();
      this.farenheitText = farenheit.toString();
    }


  }

  changeActive(value: string){
    this.active = value;
  }
}
