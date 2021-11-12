import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-tt',
  templateUrl: './ui-tt.component.html',
  styleUrls: ['./ui-tt.component.scss']
})
export class UiTtComponent implements OnInit {

  @Input() linkInfo:any | undefined;
  claseMute:string ="fa-volume-up fa-2x icon-mute"

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  redirec(){
    window.location.href = this.linkInfo.link
  }
  mute(){
    this.claseMute = "fa-volume-off fa-2x icon-mute-2"
  }
}
