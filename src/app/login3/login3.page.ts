import { Component, OnInit } from '@angular/core';
import { RegistroService } from './login3.service';


@Component({
  selector: 'app-login3',
  templateUrl: './login3.page.html',
  styleUrls: ['./login3.page.scss'],
})
export class Login3Page implements OnInit {

  public Perfil: any;
  public name: any;
  public mail: any;
  public password: any;
  public cuit: any;
  public teleono: any;
  public datosEnviados: any=[];


  constructor(private registroService: RegistroService) { }


  

  ngOnInit() {
  }

 

  registrarLocal(){
    this.datosEnviados=[];
    this.datosEnviados.push(this.name,this.mail,this.password)
    this.registroService.insertarLocalComercial(this.datosEnviados).subscribe(data =>{
    console.log(data);
    })

  }
}
