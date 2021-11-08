import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { PlugService } from './services/plug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
 
  title = 'ls-tt';
 
  numeros:string[] = ["../../../assets/xd.mp4","../../../assets/xd - copia.mp4","../../../assets/xd - copia (2).mp4","../../../assets/xd - copia (3).mp4","../../../assets/xd - copia (4).mp4","../../../assets/xd - copia (5).mp4"];


  constructor(private plugService:PlugService){
   
  }

  ngAfterViewInit(): void {
    const main = document.querySelector('#main');

    const scrollEvent = () => {
    
      if (main!.scrollTop > window.innerHeight / 2) {
        this.plugService.cambiarEstado("autoplay")
      } else {
        
      }
    }
    
    main!.addEventListener('scroll', scrollEvent);
  }
  
 
}
