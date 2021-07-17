import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'my-store';
  storeName: string = "Curtis's Store: The Pinnacle of E-Commerce™";

  linkedinImg: string = "https://image.flaticon.com/icons/png/512/174/174857.png";
  githubImg: string = "https://image.flaticon.com/icons/png/512/25/25231.png";
  
  linkedinUrl: string = "https://www.linkedin.com/in/curtisbabin/";
  repoUrl: string = "https://github.com/CurtisGrayeBabin/my-store";

  constructor(){}
 }