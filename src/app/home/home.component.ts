import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import {CategorieService} from '../categorie/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  public categorie = [];
  private roles: string[];
  private authority: string;

  // tslint:disable-next-line:max-line-length
  constructor(private tokenStorage: TokenStorageService , private token: TokenStorageService , private _categorieService: CategorieService ) { }

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
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this._categorieService.getAllCategorie()
      .subscribe(data => this.categorie = data);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
