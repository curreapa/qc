import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-tt',
  templateUrl: './ui-tt.component.html',
  styleUrls: ['./ui-tt.component.scss']
})
export class UiTtComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  redirec(){
    window.location.href = "https://queen-cam.com/p/fraaanbabe"
  }
}
