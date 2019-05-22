import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AppGlobal } from './app.global';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, AppGlobal]
})
export class AppComponent implements OnInit{
  constructor(private appGlobal: AppGlobal, private authService: AuthenticationService, private router: Router) {}
  isLoggedIn: any;


  ngOnInit(): void {
    this.isLoggedIn = this.authService.currentUserValue;
  }

  logout() {
    this.router.navigate(['']);
    return this.authService.logout();
  }
}
