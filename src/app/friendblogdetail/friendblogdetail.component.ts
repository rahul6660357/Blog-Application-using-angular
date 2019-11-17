import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-friendblogdetail',
  templateUrl: './friendblogdetail.component.html',
  styleUrls: ['./friendblogdetail.component.scss']
})
export class FriendblogdetailComponent implements OnInit {
blogid;
  private BlogById;
  constructor(private activatedroute: ActivatedRoute, private service: BlogserviceService,
              private router: Router, private https: UserserviceService) { }

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.blogid = params.id;
      this.service.getBlogById(this.blogid).subscribe((data6) => {
        this.BlogById = data6;
      });
    });
  }

  addlikes(blogid) {
    this.service.AddLikes(blogid).subscribe((data1) => {
      this.service.getBlogById(blogid).subscribe((data) => {
        this.BlogById = data;

      });
    } );
  }

  adddislikes(blogid) {
    this.service.ADDDislikes(blogid).subscribe((data1) => {
      this.service.getBlogById(this.blogid).subscribe((data) => {
        this.BlogById = data;

      });
    });
  }
}
