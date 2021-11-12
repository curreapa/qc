import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { JsonService } from './services/json.service';
import { PlugService } from './services/plug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
 
  title = 'ls-tt';
 

  dataJason:any[]=[]

  constructor(private jsonService:JsonService){
    this.dataJason = this.jsonService.jsonData;
  }

  ngAfterViewInit(): void {
    const main = document.querySelector('#main');

    const scrollEvent = () => {
    
      if (main!.scrollTop > window.innerHeight / 2) {
        
      } else {
        
      }
    }
  }
  
 
}
