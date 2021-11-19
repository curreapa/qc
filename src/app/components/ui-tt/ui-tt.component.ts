import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json.service';
import { LikenDTO } from 'src/app/services/LikeDTO';

@Component({
  selector: 'app-ui-tt',
  templateUrl: './ui-tt.component.html',
  styleUrls: ['./ui-tt.component.scss']
})
export class UiTtComponent implements AfterViewInit {

  @Input() linkInfo:any | undefined;
  claseMute:string ="fa-volume-off fa-2x icon-mute-2"
  classLike:string = "fa-heart fa-2x icon-like";

  @Output() volumen = new EventEmitter<string>();
  constructor(private route:Router, private json:JsonService) {

   }
  ngAfterViewInit(): void {
    if(this.linkInfo.userLike){
      this.liked();
    }
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
  like(id:number){

    console.log(id)
    
      this.json.likeProfile(id).subscribe(data =>{
        this.liked();
      })
    
  }
  formatSrc(src:string):string{

    src = src.replace(String.fromCharCode(92), ""); 
    return "https://queen-cam.com/"+src;
  }


  liked(){
    this.classLike = "fa-heart fa-2x icon-like heart-liked"
  }
}
