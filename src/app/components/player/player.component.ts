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
  @ViewChild('videoly') videoly!: ElementRef;
  estado:string="none";

  constructor(private plugService:PlugService) {
    this.plugService.getEstado$().subscribe((data)=>{
      this.videoly.nativeElement.autoplay = "autoplay"
    }) 
  }
  

  ngOnInit(): void {
  }
}


