import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private signup: boolean;
  private authority: string;
  private date = new Date();
  private href: string;
  constructor(private tokenStorage: TokenStorageService , private token: TokenStorageService , private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
   this.href =  window.location.href;
  }
  signOut() {
    window.sessionStorage.clear();
  }
  logout() {
    this.signOut();
    this.token.signOut();
    // @ts-ignore
    this.router.navigate(['/home']);
    // tslint:disable-next-line:comment-format
    window.location.replace('/home');
  }
  singup() {
    this.signup = true;
    window.location.replace('/signup');
  }
}
