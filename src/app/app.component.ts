import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'my-store';
  storeName: string = "Curtis's Store: The Pinnacle of E-Commerce™";

  constructor(){}
 }