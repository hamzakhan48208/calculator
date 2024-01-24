import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalciComponent } from './components/calci/calci.component';
import { FormsModule } from '@angular/forms';
import { ForexComponent } from './components/forex/forex.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,

    CalciComponent,
      ForexComponent,
      TemperatureComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
