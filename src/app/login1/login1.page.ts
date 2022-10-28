import { Component, OnInit } from '@angular/core';
import { RegistroService } from './login1.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

showpassword = false;
passowrdtgi = "eye";

public Perfil: any;
public name: any;
public mail: any;
public password: any;
public datosEnviados: any=[];

  constructor(private registroService: RegistroService, private router: Router) { }

registrarUsuarioComun(){
  this.datosEnviados=[];
  this.datosEnviados.push(this.name,this.mail,this.password)
  this.registroService.insertarUsuarioComun(this.datosEnviados).subscribe(data =>{
  console.log(data);
  })
    
}
  togglepassword():void{
    this.showpassword = !this.showpassword;

    if(this.passowrdtgi == 'eye'){
      this.passowrdtgi = 'eye-off'
    } else {
      this.passowrdtgi = 'eye'

    }

  }


  
  ngOnInit() {
  }

  showcfpassword = false;
  cfpassowrdtgi = "eye";

  togglecfpassword():void{
    this.showcfpassword = !this.showcfpassword;


    if(this.cfpassowrdtgi == 'eye'){
      this.cfpassowrdtgi = 'eye-off'
    } else {
      this.cfpassowrdtgi = 'eye'

    }
  }



}







