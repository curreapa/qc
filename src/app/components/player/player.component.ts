import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit,Input, ViewChild, ElementRef } from '@angular/core';

import { PlugService } from 'src/app/services/plug.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() url:string | undefined;
  @Input() infoPerfil:any | undefined;

  @ViewChild('videoly') videoly!: ElementRef;
  estado:string="none";

  constructor(private plugService:PlugService) {
    
  }
  

  ngOnInit(): void {
  }

  formatSrc(src:string):string{
    src = src.replace(String.fromCharCode(92), "");
    
    return "https://queen-cam.com/"+src;
  }
}


