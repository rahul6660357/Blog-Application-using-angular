import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AddNewBlogComponent} from './add-new-blog/add-new-blog.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {AddfriendsComponent} from './addfriends/addfriends.component';
import {FrienddetailComponent} from './frienddetail/frienddetail.component';
import {FriendblogdetailComponent} from './friendblogdetail/friendblogdetail.component';

export const MAIN_ROUTES: Routes = [
  {
    path: 'userlogin',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addblog',
    component: AddNewBlogComponent
  },
  {
    path: 'myprofile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'blogdetails',
    component: BlogDetailsComponent
  },
  {
    path: 'addfriend',
    component: AddfriendsComponent
  },
  {
    path: 'frienddetail',
    component: FrienddetailComponent
  },
  {
    path: 'friendblogdetail',
    component: FriendblogdetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

  ];
