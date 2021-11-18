import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-ui-tt',
  templateUrl: './ui-tt.component.html',
  styleUrls: ['./ui-tt.component.scss']
})
export class UiTtComponent implements OnInit {

  @Input() linkInfo:any | undefined;
  claseMute:string ="fa-volume-off fa-2x icon-mute-2"
  @Output() volumen = new EventEmitter<string>();
  constructor(private route:Router, private json:JsonService) { }

  ngOnInit(): void {
  }

  redirec(){
    window.location.href = this.linkInfo.link
  }
  mute(){
    if(this.claseMute != "fa-volume-up fa-2x icon-mute"){

      this.claseMute = "fa-volume-up fa-2x icon-mute"
      this.volumen.emit("")
    }else{
      this.claseMute = "fa-volume-off fa-2x icon-mute-2"
      this.volumen.emit("muted")
    }
    
  }
  like(){
    this.json.likeProfile(this.linkInfo.id)
  }
}
