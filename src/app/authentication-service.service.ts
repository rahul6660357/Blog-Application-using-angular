import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:8081/Users/get1', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
        }
      ));
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  sendnewUser(data) {
    return this.httpClient.post('http://localhost:8081/Users/adduser' , data).subscribe((data5) => {
      this.router.navigate(['/userlogin']);
    }, (error1 => {
      alert('Email Already exists');
    }));
  }
}
