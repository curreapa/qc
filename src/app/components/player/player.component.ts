import { Component, OnInit,Input, ViewChild, ElementRef} from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() url:string | undefined;
  @Input() infoPerfil:any | undefined;

  @ViewChild('videoly') videoly!: ElementRef;
  estado:string="muted";

  constructor(private json:JsonService) {

    this.estado = this.json.muted
  }

  ngOnInit(): void {
  }

  formatSrc(src:string):string{

    src = src.replace(String.fromCharCode(92), ""); 
    return "https://queen-cam.com/"+src;

  }

  volumen(volumen:string){

    this.estado = volumen;
    
  }
}


