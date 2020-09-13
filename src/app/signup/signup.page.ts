import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth/auth.service';

// User class
export class User{
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public user:User = new User();

  emailError : boolean = false;
  passwordError : boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user.email="";
    this.user.password="";
  }

  validate() {

    if (this.user.email == "") {
      this.emailError = true;
    } else{
      this.emailError = false;
    }
    if (this.user.password == "") {
      this.passwordError = true;
    } else{
      this.passwordError = false;
    }

    return !this.emailError && !this.passwordError;
  }

  signUp(){
    if(this.validate()){
      this.authService.signUp(this.user.email, this.user.password);

    }
  }

  eventHandler($event, input: string){
    if($event != null){
      if(input == "email"){
        this.emailError = false;
      } 
      else if(input = "password"){
        this.passwordError = false;
      }
    }
  }
}
