import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Login1Service {

  constructor(private http: HttpClient) { }



insertarusuario(datosenviados){
 
  return this.http.post('http://localhost:3001/url',{datosenviados});

  }
  
 }