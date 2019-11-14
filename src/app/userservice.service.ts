import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) { }


    getUserDetails() {
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.httpClient.get('http://localhost:8081/Users/getuserdetail' , {headers});
    }


  UpdatethisUser(data, type) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:8081/Users/updateuser/' + type , data,  {headers});
  }
}
