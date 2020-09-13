import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';


export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  emailError : boolean = false;
  passwordError : boolean = false;

  constructor(private authService: AuthService, private navController: NavController) { }

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

  login() {
    console.log(this.validate());

    if(this.validate()){
      this.authService.login(this.user.email, this.user.password);
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
