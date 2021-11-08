import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlugService {


  private estado$ = new Subject<string>();

  constructor() { }

  getEstado$():Observable<string>{
    return this.estado$.asObservable();
  }
  cambiarEstado(estado:string){
    this.estado$.next(estado);
  }
}
