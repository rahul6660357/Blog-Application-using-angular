import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
Blogs;
blogid;
BlogById;
  private list: {  blogid: number , blogname: string, blogimage: string ,
    blogdetail: string, blogheading: string, website: string, date: object ,
    likes: number, dislikes: number, category: string, access: string, users: object};
  yourname: any;
  private Profile;
  constructor(private activatedroute: ActivatedRoute, private service: BlogserviceService,
              private router: Router, private https: UserserviceService) { }

  ngOnInit() {
    this.service.getBlogs().subscribe((data3) => {
      this.Blogs = data3;
     // console.log(this.Blogs);
      this.activatedroute.queryParams.subscribe(params => {
        this.blogid = params.id;


        this.list = this.alldetails(this.blogid);

      });
    });

    this.https.getUserDetails().subscribe((data2) => {
      this.Profile = data2;
      this.yourname = this.Profile.firstname;

    });

  }

  private alldetails(blogid) {

    for (let i = 0; i < this.Blogs.length; i++) {
      if (this.Blogs[i].blogid == blogid) {

        return this.Blogs[i];
      }
    }
  }

  addlikes(blogid) {
    this.service.AddLikes(blogid).subscribe((data) => {
      this.service.getBlogs().subscribe((data1) => {
        this.Blogs = data1;
        this.list = this.alldetails(this.blogid);

      });
    } );
  }

  adddislikes(blogid) {
    this.service.ADDDislikes(blogid).subscribe((data) => {
      this.service.getBlogs().subscribe((data1) => {
        this.Blogs = data1;
        this.list = this.alldetails(this.blogid);

      });
    });
  }

  updatethisblog(blogid) {
this.service.UpdateBlog(blogid, this.list).subscribe((data5) => {
  this.ngOnInit();
});
  }


}
