import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  selectedTab = 'Standard';

  onChangedTab(tabName: string){
    this.selectedTab = tabName;
  }
}
