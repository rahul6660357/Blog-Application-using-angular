import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.scss']
})
export class AddfriendsComponent implements OnInit {
  Users;
  yourname;
  Profile;
  search;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private service: AppserviceService, private http: BlogserviceService,  private https: UserserviceService) { }

  ngOnInit() {
    this.http.getUsers().subscribe((data2) => {
      this.Users = data2;

    });
    this.https.getUserDetails().subscribe((data2) => {
      this.Profile = data2;
      this.yourname = this.Profile.firstname;
      console.log(this.yourname);
    });
  }
  follow(userid) {
    this.http.Followthis(userid).subscribe((data2) => {
    });
  }

  searchname() {
    this.http.SearchByName(this.search).subscribe((data) => {
      this.Users = data;
    });
  }
}
