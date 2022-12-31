import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle :string;
  public web : string;

  
  constructor(){
    this.title = " Jose Luis Duran"
    this.subtitle ="Aspirante a Desarrollador Web Front End";
    this.web = "correo@gmail.com";
  }

  ngOnInit(): void {
    
  }

}
