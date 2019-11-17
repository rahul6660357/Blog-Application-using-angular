import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
Blogs;
Users;
FollowUsers;
yourname;
category;
Profile;
access;
  search: any;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private service: AppserviceService, private http: BlogserviceService,  private https: UserserviceService) { }

  ngOnInit() {
    if (!this.service.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.http.getBlogs().subscribe((data) => {
      this.Blogs = data;
      this.access = 'public';
        });

    this.http.getUsers().subscribe((data2) => {
      this.Users = data2;

    });
    this.https.getUserDetails().subscribe((data2) => {
      this.Profile = data2;
      this.yourname = this.Profile.firstname;
    });
    this.http.getfollowing().subscribe((data5) => {
      this.FollowUsers = data5;
    });
  }

  searchname() {
this.http.getsearchBlogs(this.search).subscribe((data5) => {
  this.Blogs = data5;
});
  }

  displaydetails(blogid) {
    this.router.navigate(['/blogdetails'], {queryParams: {id: blogid}});
  }

  addlikes(blogid) {
this.http.AddLikes(blogid).subscribe((data1) => {
  this.http.getBlogs().subscribe((data) => {
    this.Blogs = data;

  });
} );
  }

  adddislikes(blogid) {
this.http.ADDDislikes(blogid).subscribe((data) => {
  this.http.getBlogs().subscribe((data1) => {
    this.Blogs = data1;

  });
});
  }

  Friendsdetail(followingid) {
    this.router.navigate(['/frienddetail'], {queryParams: { id: followingid}});
  }
  selectChangeHandler(event: any) {
    this.category = event.target.value;
    console.log(this.category);
    if (this.category == 'Select') {
      this.http.getBlogs().subscribe((data1) => {
        this.Blogs = data1;
      });
    } else {
      this.http.findbycategory(this.category, this.access).subscribe((data) => {
        this.Blogs = data;
      });
    }
  }

  deleteblog(blogid) {
    this.http.deleteblog(blogid).subscribe((data) => {
      this.Blogs = data;
      this.ngOnInit();
    });
  }
}
