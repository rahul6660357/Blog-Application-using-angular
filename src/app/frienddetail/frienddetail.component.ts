import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';
import {AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-frienddetail',
  templateUrl: './frienddetail.component.html',
  styleUrls: ['./frienddetail.component.scss']
})
export class FrienddetailComponent implements OnInit {
private list: {followingid: number, follower: object, following: object};
private Profile;
  private followingid;
  Blogs;
  personid;
  constructor(private activatedroute: ActivatedRoute, private service: BlogserviceService,
              private router: Router, private https: UserserviceService, private service1: AppserviceService) { }

  ngOnInit() {
    if(!this.service1.checklogin()) {
      this.router.navigate(['userlogin']);
    }
    this.service.getfollowing().subscribe((data5) => {
      this.Profile = data5;
      this.activatedroute.queryParams.subscribe(params => {
        this.followingid = params.id;
        this.list = this.friendsdetail(this.followingid);
      });
    });

  }

  private friendsdetail(followingid) {
    for (let i = 0; i < this.Profile.length; i++) {
      if (this.Profile[i].followingid == followingid) {
        this.personid = this.Profile[i].following.userid;
        this.service.getBlog(this.personid).subscribe((data5) => {
          this.Blogs = data5;

        });
        return this.Profile[i];

      }
    }
  }

  displaydetails(blogid) {

    this.router.navigate(['/friendblogdetail'], {queryParams: {id: blogid}});
  }

  addlikes(blogid) {
    this.service.AddLikes(blogid).subscribe((data1) => {
      this.service.getBlogs().subscribe((data) => {
        this.Blogs = data;

      });
    } );
  }

  adddislikes(blogid) {
    this.service.ADDDislikes(blogid).subscribe((data1) => {
      this.service.getBlogs().subscribe((data) => {
        this.Blogs = data;

      });
    });
  }
}
