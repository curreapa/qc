import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  jsonData:any[]=[];

  constructor(private http:HttpClient) { 
      http.get("https://www.cristianurrea.dev/api/v1/queens/tiktok").subscribe(data=>{
        Object.entries(data).forEach(i=>{
          this.jsonData.push(i["1"])
        })
       
      })
  }

  likeProfile(id:number){
    this.http.put('https://www.cristianurrea.dev/api/v1/queens/tiktok/like/', id).subscribe(
      
    )
  }
}
