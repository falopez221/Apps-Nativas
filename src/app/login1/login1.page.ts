import { Component, OnInit } from '@angular/core';
import { Login1Service } from './login1.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

showpassword = false;
passowrdtgi = "eye";

public name: any;
  public mail: any;
  public password: any;
  public datosenviados: any=[];


  constructor(private registroService: Login1Service) { }

registrar(){
  this.datosenviados=[];
     this.datosenviados.push(this.name,this.mail,this.password);

  this.registroService.insertarusuario(this.datosenviados).subscribe(data =>{
    
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







