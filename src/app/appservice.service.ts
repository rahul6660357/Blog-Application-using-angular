import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }

  isLoggedIn(value: boolean) {
    sessionStorage.setItem('auth', String(value));
    return value;
  }
  checklogin() {
    const auth = sessionStorage.getItem('auth');
    console.log(JSON.parse(auth));
    return JSON.parse(auth);
  }

}
