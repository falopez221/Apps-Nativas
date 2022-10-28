import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }



insertarUsuarioComun(datosEnviados){
 
  return this.http.post('http://localhost:3001/insertar_usuario_comun',{datosEnviados});

  }
  
 }