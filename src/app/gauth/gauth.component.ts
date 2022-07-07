import { Component, OnInit } from '@angular/core';
import {SocialUser, GoogleLoginProvider} from 'angularx-social-login';
import {SocialAuthService} from 'angularx-social-login'
import { Router } from '@angular/router';

@Component({
  selector: 'app-gauth',
  templateUrl: './gauth.component.html',
  styleUrls: ['./gauth.component.css']
})
export class GauthComponent implements OnInit {

  user: SocialUser

  constructor(private authService: SocialAuthService,public router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if(user){
        this.storeLogin(user.email);
        this.router.navigate(['/dashboard']);
        }
        else{
          alert("User Already Exist"); 
        }
    })
  }

  signInWithGoogle(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): any {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

  ////////////////////////////

  storeLogin(email){
    sessionStorage.setItem("email", email); 
  }


  ////////////////////////////



}
