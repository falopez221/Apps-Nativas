import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  showpassword = false;
passowrdtgi = "eye";

 

  togglepassword():void{
    this.showpassword = !this.showpassword;

    if(this.passowrdtgi == 'eye'){
      this.passowrdtgi = 'eye-off'
    } else {
      this.passowrdtgi = 'eye'

    }

  }
  constructor() { }

  ngOnInit() {
  }

}
