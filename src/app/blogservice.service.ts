import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor(private httpClient: HttpClient) { }


    getBlogs() {
      const token = sessionStorage.getItem('token');
      const headers = new HttpHeaders({Authorization: 'Basic ' + token});
      return this.httpClient.get('http://localhost:8081/Blogs/showallblogs' , {headers});
    }

  AddProduct(data) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:8081/Blogs/addblog' ,  data, {headers});
  }

  AddLikes(blogid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/addlikes/' + blogid , {headers});
  }

  ADDDislikes(blogid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/adddislikes/' + blogid , {headers});
  }

  getUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Users/getallusers', {headers});
  }

  Followthis(userid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.post('http://localhost:8081/Follow/followthis/' + userid , userid, {headers});
  }

  UpdateBlog(blogid, data) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.put('http://localhost:8081/Blogs/updateblog/' + blogid , data, {headers});
  }

  getfollowing() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Follow/getfollower', {headers});
  }

  getBlog(userid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/getBlogs/' + userid, {headers});
  }

  SearchByName(search) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Users/username/'  + search,  {headers});
  }

  getBlogById(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/blogbyid/' + id,  {headers});
  }

  getsearchBlogs(search) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/findblog/'  + search,  {headers});
  }

  deleteblog(blogid) {
    console.log(blogid);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.delete('http://localhost:8081/Blogs/deleteblog/' + blogid  ,  {headers});
  }
  findbycategory(number1: any, number2: any) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.httpClient.get('http://localhost:8081/Blogs/find-by-category/' + number1 + '/' + number2 , { headers});
  }

}
