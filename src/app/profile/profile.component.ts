import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service';
import {Router} from '@angular/router';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
Profile;
oldpassword: string;
oldEmail: string;
  recentpassword: string;

 constructor(private service: AppserviceService, private router: Router, private http: UserserviceService) { }

  ngOnInit() {
if(!this.service.checklogin()){
  this.router.navigate(['userlogin']);
}
    this.http.getUserDetails().subscribe((data) => {
      this.Profile = data;
      this.oldpassword = this.Profile.password;
      this.oldEmail = this.Profile.email;
    });
  }
  UpdateUser() {

    this.http.UpdatethisUser(this.Profile, this.Profile.userid).subscribe((data5) => {
      if (this.Profile.password != this.oldpassword || this.oldEmail != this.Profile.email  ) {
        alert('Updated Successfully!');
        if( this.recentpassword == this.oldpassword) {
          this.service.isLoggedIn(false);
          this.router.navigate(['userlogin']);
        }
      } else {
        alert('please check your recent password');
      }
    });
  }
}
