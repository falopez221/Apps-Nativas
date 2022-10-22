import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

showpassword = false;
passowrdtgi = "eye";

  constructor() { }

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
