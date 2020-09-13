import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;
    // private _isUserAuthenticated = true;


  constructor(private fireBaseAuth: AngularFireAuth, private router: Router) { }

  get isUserAuthenticated(){
    return this._isUserAuthenticated;
  }

  async signUp(email:string, password: string){
    try {
      var r = await this.fireBaseAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (r) {
        this._isUserAuthenticated = true;
        console.log("Successfully registered!");

        this.router.navigateByUrl('/home');
      }

    } catch (err) {
      console.error(err);
    }
    
  }

  async login(email:string, password: string) {

    try {
      var r = await this.fireBaseAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (r) {
        this._isUserAuthenticated = true;
        console.log(r);
        this.router.navigateByUrl('/home');

      }

    } catch (err) {
      console.error(err);
    }
  }

  logout(){
    this.fireBaseAuth.auth.signOut();
    this._isUserAuthenticated = false;
    this.router.navigateByUrl('/login')
  }

  

}
