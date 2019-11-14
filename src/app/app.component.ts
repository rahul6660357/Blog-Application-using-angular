import {Component, OnInit} from '@angular/core';
import {AppserviceService} from "./appservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BlogApplication';
  checklgn: string;
constructor(private router: Router, private service: AppserviceService) { }
  ngOnInit() {
    if (!this.service.checklogin()) {
      this.checklgn = 'false';
    }

  }
  logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['userlogin']);
  }

}
