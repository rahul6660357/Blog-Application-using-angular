import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppserviceService} from "../appservice.service";
import {AuthenticationServiceService} from "../authentication-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  Username;
  Password;
  Email;
  Password1;

  constructor( private router: Router, private service: AppserviceService, private authservice: AuthenticationServiceService) { }

  ngOnInit() {
    if (this.service.checklogin()) {
      this.router.navigate(['home']);
    }
  }


    login() {
      this.authservice.authenticate(this.username, this.password).subscribe(data => {
        this.service.isLoggedIn(true);
        this.router.navigate(['home']);
      });
    }

  signupfun() {
    if( this.Email != null && this.Password != null && this.Username != null) {
      const data = {
        email: this.Email,
        password: this.Password,
        firstname: this.Username
      };
      if (this.Password == this.Password1) {
        this.authservice.sendnewUser(data);
      }
    } else {
      alert('please check your credentials');
    }
  }
}
