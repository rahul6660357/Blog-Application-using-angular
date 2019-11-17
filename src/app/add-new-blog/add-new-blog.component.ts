import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.scss']
})
export class AddNewBlogComponent implements OnInit {
  blogname;
  blogcategorie;
  blogdetail;
  blogimage;
  bloglink;
  blogheading;
  blogaccess;


  constructor(private router: Router, private http: BlogserviceService) { }

  ngOnInit() {
  }

  addblog() {
    const data = {
      blogname: this.blogname,
      category: this.blogcategorie,
      blogdetail: this.blogdetail,
      blogimage: this.blogimage,
      website: this.bloglink,
      blogheading: this.blogheading,
      access: this.blogaccess
    };
    console.log(data);

    this.http.AddProduct(data).subscribe((data1) => {
      this.router.navigate(['/home']);
      alert('added Successfully!!');
    });
  }

  selectChangeHandler(event: any) {
    this.blogaccess = event.target.value;
  }
}
