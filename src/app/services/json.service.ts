import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikenDTO } from './LikeDTO';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  jsonData: any[] = [];
  ipCliente:string = "";
  muted:string= ""
  constructor(private http: HttpClient) {
    this.obtenerIp().subscribe(data => {
      this.ipCliente = data.ip;
      var ip = data.ip;
      http.get("https://www.cristianurrea.dev/api/v1/queens/tiktok/" + ip).subscribe(data => {
        Object.entries(data).forEach(i => {
          this.jsonData.push(i["1"])
        })
      })
    })
  }

  likeProfile(iditem: number): Observable<any> {
    var like: LikenDTO = {
      id: iditem,
      ip: this.ipCliente
    }
    return this.http.put('https://www.cristianurrea.dev/api/v1/queens/tiktok/like/', like)
  }


  obtenerIp(): Observable<any> {
    var ip: string = "";
    return this.http.get("https://api.ipify.org/?format=json")

  }
}
