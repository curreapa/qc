import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  jsonData:any[]=[];

  constructor(private http:HttpClient) { 
      http.get("assets/results.json").subscribe(data=>{
        Object.entries(data).forEach(i=>{
          this.jsonData.push(i["1"])
        })
       
      })
  }
}
