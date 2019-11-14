import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { AddNewBlogComponent } from './add-new-blog/add-new-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { FrienddetailComponent } from './frienddetail/frienddetail.component';
import { FriendblogdetailComponent } from './friendblogdetail/friendblogdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AddNewBlogComponent,
    BlogDetailsComponent,
    AddfriendsComponent,
    FrienddetailComponent,
    FriendblogdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
